const {google} = require('googleapis');
const User = require('../models/userModel')

// Set app data
const oauth2Client = new google.auth.OAuth2(
    process.env.OAUTH_CLIENT_ID,
    process.env.OAUTH_CLIENT_SECRET,
    process.env.OAUTH_REDIRECT_URL
);

// Access scopes
const scopes = [
    'https://www.googleapis.com/auth/userinfo.email',
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/user.gender.read',
    'openid'
];

/**
 *
 * @param oauthCode
 * @returns {Promise<Credentials>}
 */
function getToken(oauthCode) {
    return new Promise(resolve => {
        oauth2Client.getToken(oauthCode).then((tokenResponse) => {
            resolve(tokenResponse.tokens)
        })
    })
}

function getUser(creds) {
    return new Promise((resolve, failure) => {
        oauth2Client.setCredentials(creds)
        const people = google.people({
            version: 'v1',
            auth: oauth2Client
        });

        people.people.get({
            resourceName: 'people/me',
            personFields: 'emailAddresses,names,genders'
        }).then(({data}) => {
            resolve({
                email: data.emailAddresses[0].value,
                name: {
                    first: data.names[0].givenName,
                    last: data.names[0].familyName
                },
                last: data.genders[0].value
            })
        }).catch(err => {
            failure(err)
        })
    })
}

//https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.gender.read%20openid&include_granted_scopes=true&response_type=code&client_id=455596159325-1o5l25eme193gapjh1vrco3kqv375k9f.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fbu.roomie4.me%2Foauth
function getAuthorizationURL() {
    // Generate a url that asks permissions
    return oauth2Client.generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
        /** Pass in the scopes array defined above.
         * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
        scope: scopes,
        // Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes: true
    });
}

module.exports = {getAuthorizationURL, getToken, getUser}