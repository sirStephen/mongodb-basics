const insertDocuments = (db) => {
    // Get the documents collection
    const collection = db.collection('interns');
    // Insert some documents
    collection.insertMany([
        {
            'name': 'Otiono Gregory',
            'track': 'frontend, backend',
            'courses': 'javascript, node js'
        },
        {
            'name': 'John Doe',
            'track': 'frontend',
            'courses': 'javascript, html, css'
        },
        {
            'name': 'Jane Doe',
            'track': 'backend',
            'courses': 'node js, python'
        }
    ], (err, result) => {
        if (err) throw err
        // console.log(result)
    })
}

const myMovies = (db) => {
    const collection = db.collection('myMovies');

    collection.insertMany([
        {
            movie: "The Banker",
            year: "2020",
            rating: 8
        },
        {
            movie: "Bad Boys",
            year: "2020",
            rating: 7
        },
        {
            movie: "The Hunt",
            year: "2020",
            rating: 7
        },
        {
            movie: "Bloodshot",
            year: "2020",
            rating: 7.5
        },
        {
            movie: "First Cow",
            year: "2020",
            rating: 6.5
        }
    ], (err, result) => {
        if (err) throw err;
        // console.log(result);
    });
}

module.exports = {
    insertDocuments,
    myMovies
}

