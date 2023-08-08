import CryptoJS from "crypto-js";
const secret = process.env.SECRET_ENCRYPTION_KEY as string

/**
 * @param messageToEncrypt the string to encrypt
 * @returns {String} the encrypted string
 */
function encrypt(messageToEncrypt : string) {
    return CryptoJS.AES.encrypt(messageToEncrypt, secret).toString();
}

/**
 *
 * @param encryptedMessage
 * @return {String} the decrypted string
 */
function decrypt(encryptedMessage : string) {
    let bytes  = CryptoJS.AES.decrypt(encryptedMessage, secret);
    return bytes.toString(CryptoJS.enc.Utf8)
}

module.exports = {encrypt, decrypt}