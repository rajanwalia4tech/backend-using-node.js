const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//connection URL
const url = "mongodb://localhost:27017";

//DataBase Name
const dbName = 'fruitsDB';

// create a new MongoClient
const client = new MongoClient(url, { useUnifiedTopology: true });

// USe connect method to connect to the server
client.connect(function(err) {
    assert.equal(null, err);
    console.log("connected successfully to server");

    const db = client.db(dbName);

    insertDocuments(db, function() {
        client.close();
    });

});

const insertDocuments = function(db, callback) {

    //get the document collection
    const collection = db.collection('fruits');

    collection.insertMany([{
            name: "Apple",
            score: 7,
            review: "great fruit"
        },
        {
            name: "Orange",
            score: 9,
            review: "Nyc one"
        },
        {
            name: "banana",
            score: 10,
            review: "best fruit"
        }
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
};