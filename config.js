// TODO Create your env file first!

const dotenv = require('dotenv');
const result = dotenv.config();

if (result.error) {
    throw result.error;
}

const { parsed: envs } = result;
console.log(envs);

module.exports = envs;
