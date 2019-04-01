const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { MongoClient } = require('mongodb');
const sourceUrl = process.env.DB_MONGO_URL;

const db = {};
let client = null;

// Connect to the db
MongoClient.connect(sourceUrl, { useNewUrlParser: true })
  .then((connect) => {
    client = connect;
    return Promise.all([
      client.db('shop'),
      client.db('shop-testing')
    ]);
  })
  .then((res) => {
    db.source = res[0];
    db.target = res[1];
    return db.source.listCollections().toArray();
  })
  .then((collections) => {
    const requests = collections.map((info) => {
      return db.target.collection(info.name).deleteMany({})
        .then(() => db.source.collection(info.name).find({}).toArray())
        .then(documents => db.target.collection(info.name).insertMany(documents));
    });
    return Promise.all(requests);
  })
  .then(() => {
    console.log('Succeed');
    process.exit(1);
  })
  .catch(console.log);
