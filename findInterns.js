const findFirstCollection = (db) => {
    const findOneCollection = db.collection('myMovies');
    findOneCollection.findOne({}, (err, result) => {
        if (err) throw err;
        // console.log(result);
    });
}

const findAllCollection = (db) => {
    const findAllCollection = db.collection('myMovies');
    findAllCollection.find({}).toArray((err, result) => {
        if (err) throw err;

        let results = result.map(r => {
            // if (r.rating === 7) console.log(r);
        });
        return results;
    });
}

const findMovies = (db) => {
    const findMovies = db.collection('myMovies');
    
    findMovies.find({}).project({movie: 1, _id:0}).toArray((err, result) => {
        if (err) throw err;

        // console.log(result);
    });
}

module.exports = {
    findFirstCollection,
    findAllCollection,
    findMovies
}

