import CPR from 'crypto-random-string';
import sha512 from 'js-sha512';

const charset = '!\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~æøå ';

const ciphEncrypt = (str, key) => {
    let chunks = str.split('');
    return chunks.map( chunk => {
        return sha512(chunk + key);
    });
}

const ciphDecrypt = (arr, key) => {
    let decrypted = new Promise((resolve, reject) => {
        let chars = charset.split('');

        let decryptedString = '';
        arr.forEach( hash => {
            chars.forEach( char => {
                if(sha512(char + key) === hash) {
                    decryptedString += char;
                }
            })
            if(decryptedString.length === arr.length) {
                resolve(decryptedString);
            }
        });

        setTimeout(() => {
            if(decryptedString.length !== arr.length) {
                reject('Failed to decrypt...');
            }
        }, 60000);

    });

    return decrypted;
}

export { CPR, ciphEncrypt, ciphDecrypt };