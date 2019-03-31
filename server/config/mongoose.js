const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

const url = process.env.NODE_ENV === 'test' ? process.env.DB_MONGO_URL_TEST : process.env.DB_MONGO_URL;

exports.connect = () => mongoose.connect(url, { useNewUrlParser: true, promiseLibrary: true });

exports.disconnect = () => mongoose.connection.close();
