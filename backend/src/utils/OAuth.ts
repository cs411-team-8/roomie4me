import {OAuth2Client} from 'googleapis-common'
import {google} from 'googleapis';
import {GetTokenResponse} from "google-auth-library/build/src/auth/oauth2client";

function getNewOAuthClient() : OAuth2Client {
    return new google.auth.OAuth2(
        process.env.OAUTH_CLIENT_ID,
        process.env.OAUTH_CLIENT_SECRET,
        process.env.OAUTH_REDIRECT_URL
    );
}

async function getToken(oauthCode : string) : Promise<GetTokenResponse> {
    return getNewOAuthClient().getToken(oauthCode)
}

//https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuser.gender.read%20openid&include_granted_scopes=true&response_type=code&client_id=455596159325-1o5l25eme193gapjh1vrco3kqv375k9f.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Fbu.roomie4.me%2Foauth
function getAuthorizationURL() : string {
    // Generate a url that asks permissions
    return getNewOAuthClient().generateAuthUrl({
        // 'online' (default) or 'offline' (gets refresh_token)
        access_type: 'offline',
        /** Pass in the scopes array defined above.
         * Alternatively, if only one scope is needed, you can pass a scope URL as a string */
        scope: [
                'https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile',
                //'https://www.googleapis.com/auth/user.gender.read',
                'openid'
            ],
        // Enable incremental authorization. Recommended as a best practice.
        include_granted_scopes: true
    });
}

module.exports = {getAuthorizationURL, getNewOAuthClient, getToken}