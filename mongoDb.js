const MongoClient = require('mongodb').MongoClient;
const { insertDocuments, myMovies } = require('./interns');
const { findFirstCollection, findAllCollection, findMovies } = require('./findInterns');

// connection url
const url = 'mongodb://localhost:27017';

// database name
const dbName = 'sir_gregg';

// handles the deprecation warning
const useUnifiedTopology = { useUnifiedTopology: true };

// connect method to connect to the server
MongoClient.connect(url, useUnifiedTopology, (err, client) => {
    if (err) throw err;

    console.log(`Database created by sir.gregg ==== database name is ${dbName}`);

    const db = client.db(dbName);
    
    insertDocuments(db, () => {
        client.close();
    });

    myMovies(db, () => {
        client.close()
    });

    findFirstCollection(db, () => {
        client.close()
    });

    findAllCollection(db, () => {
        client.close()
    });

    findMovies(db, () => {
        client.close()
    });

    // updateMovie(db, () => {
    //     client.close()
    // });
});