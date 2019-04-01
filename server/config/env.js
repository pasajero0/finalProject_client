const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
require('colors');

const required = {
  DB_MONGO_URL: null,
  DB_MONGO_URL_TEST: null,
  SESSION_SECRET_KEY: null,
  MAIL_HOST: null,
  MAIL_PORT: null,
  MAIL_USER: null,
  MAIL_PASS: null,
  MAIL_FROM: null,
  NODE_ENV: 'development'
};

let ready = true;

Object.keys(required).forEach((name) => {
  if (!process.env[name]) {

    console.log(`Required environment variable ${name} is not set`.cyan);
    if(required[name] === null){
      console.log(`Please configure ${name} to run the server`.red);
      ready = false;
    }else{
      process.env[name] = required[name];
      console.log(`The value of ${name} set to default value "${required[name]}"`.green);
    }
  }
});

if (!ready) {
  // red output
  console.log('Please configure required environment variables to run the server'.bgRed);
  process.exit();
}