const insertDocuments = (db) => {
    // Get the documents collection
    const collection = db.collection('interns');
    // Insert some documents
    collection.insertOne({
        'name': 'Otiono Gregory',
        'track': 'frontend, backend',
        'courses': 'javascript, node js'
    }, (err) => {
        if (err) throw err
        console.log(`interns collection created`)
    })
}

module.exports = {
    insertDocuments
}