import CPR from 'crypto-random-string';
import sha512 from 'js-sha512';

const charset = 'abcdefghijklmnopqrstuvwxyzæøåABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ0123456789|!"#¤%&/()=?+¨^*-. _:;,<>@£$€{[]}}´~' + "'";

const ciphEncrypt = (str, key) => {
    if(!str) {
        return '';
    }
    let chunks = str.split('');
    return chunks.map( chunk => {
        return sha512(chunk + key);
    });
}

const ciphDecrypt = (arr, key) => {
    let chars = charset.split('');

    if(!arr) {
        return '';
    }

    let decryptedString = '';
    arr.forEach( hash => {
        chars.forEach( char => {
            if(sha512(char + key) === hash) {
                decryptedString += char;
            }
        })
    });
    return decryptedString;
}

export { CPR, ciphEncrypt, ciphDecrypt };