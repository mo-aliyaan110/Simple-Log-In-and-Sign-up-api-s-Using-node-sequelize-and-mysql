const crypto = require('crypto');
const mySecretKey = crypto.randomBytes(64).toString('hex')
console.log(mySecretKey);