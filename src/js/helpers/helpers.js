import CPR from 'crypto-random-string';
import sha512 from 'js-sha512';

const charset = '!\"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZÆØÅ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~æøå ';

const ciphEncrypt = (str, key) => {
    const shuffleStr = new Promise((resolve, reject) => {
        const rand = x => Math.floor(Math.random() * 3) + x;
        
        const chunks = str.split('');
        
        let curr = '';
        let shuffledChunks = [];
        
        let indexAt = 0 + rand(0);

        chunks.forEach((chunk, index) => {
            if(index === indexAt) {
                curr += chunk;
                shuffledChunks.push(curr);

                curr = '';
                indexAt += rand(1);
                
                if(indexAt > chunks.length - 1) {
                    indexAt -= indexAt - (chunks.length - 1);
                }

                if(index === chunks.length - 1) {
                    resolve(shuffledChunks);
                }
            }

            else if(index < indexAt) {
                curr += chunk;
                if(index === chunks.length - 1) {
                    shuffledChunks.push(curr);
                    resolve(shuffledChunks);
                }   
            }
        });
    });

    return shuffleStr.then(shuffledChunks => {
        return new Promise((resolve, reject) => {
            let encryptedChunks = [];
            shuffledChunks.forEach((chunk, index) => {
                encryptedChunks.push(sha512(chunk + key));
                if(index === shuffledChunks.length - 1) {
                    resolve(encryptedChunks);
                }
            });
        });
    });
};

const ciphDecrypt = (arr, key) => {
    let decryptedStr = '';         
    
    return new Promise((resolve, reject) => {
        arr.forEach((hash, index) => {
            let hashDecced = false; 
            let x1, x2, x3 = false;
            const produceCombinations = function(current, length) {
                if(sha512(current+key)===hash) {
                    decryptedStr += current;
                    hashDecced = true;

                    if(index === arr.length - 1) {
                        resolve(decryptedStr);
                    }
                }

                if(current.length < length && !hashDecced) {
                    for(let i in charset) {
                        produceCombinations(current + charset.charAt(i), length);
                    }
                }

                if(current === ' ' && !hashDecced) {
                    x1 = true;
                }

                if(current === '  ' && !hashDecced) {
                    x2 = true;
                }

                if(current === '   ' && !hashDecced) {
                    x3 = true;
                }

                if(x1, x2, x3 === true) {
                    hashDecced = true;
                    reject('Failed to decrypt this message... Perhaps you used a character that isn\'t supported? or have the wrong decryption key?');
                }

                x1, x2, x3 = false;
            }
                    
            const brute = function(min, max) {
                for(let i = min; i <= max; i++) {
                    produceCombinations("", i);   
                }
            }
                    
            brute(1,3);
        });
    });
}

export { CPR, ciphEncrypt, ciphDecrypt };