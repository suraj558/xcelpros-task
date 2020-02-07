const Book = require('../modals/books')


module.exports.list = (req,res) => {
    const { user } = req
    Book.find().populate('category', ['name'])
        .then((book) => {
            res.json(book)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.create = (req,res) => {
    const { body, user } = req
   // body.user = user._id
    const book = new Book(body)
    book.save()
        .then((book) => {
            Book.findOne({_id: book._id}).populate('category', ['name'])
                .then((book) => {
                    res.send(book)
                })
                .catch((err) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.json(err)
        })
}

