const url = require('url');
let uri ='';

const path = require('path')
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '/../config/config.json'))[env];

if (config.use_env_variable) {
    uri = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;
} else {
    uri = `mongodb://${config.host}/${config.database}`;
}

if (!uri) {
    throw new Error('\033[31mYou need to provide the connection string. ' + 'You can open "db/connection-config.js" and export it or use the "setUri" command.\033[0m');
}

const uriObj = url.parse(uri);
if (uriObj.protocol !== 'mongodb:') {
    throw new Error('Must be a mongodb URI')
}
if (!uriObj.host || !uriObj.path) {
    throw new Error('Improperly formatted URI')
}

module.exports = uri;