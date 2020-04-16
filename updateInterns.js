const updateMovie = (db) => {
    const updateMovie = db.collection('myMovies');

    updateMovie.updateOne(
        {movie: 'The Banker'},
        {
            $set: {
                movie: 'Predestination',
                year: 2014,
                rating: 7.5
            }
        }
        
    , (err, result) => {
        if (err) throw err;

        return result;
    })

    const findUpDate = updateMovie.findOne({}, (err, result) => {
        if (err) throw err;
        console.log(result);
    })
}

module.exports = {
    updateMovie
}