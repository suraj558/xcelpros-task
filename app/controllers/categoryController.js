const Category = require('../modals/category')


module.exports.create = (req,res) => {
    const { body } = req
    //body.user = user._id
    const category = new Category(body)
    category.save()
        .then((category) => {
            Category.findOne({_id: category._id})
                .then((category) => {
                    res.send(category)
                })
                .catch((err) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.list = (req,res) => {
    const { user } = req
    Category.find()
        .then((category) => {
            res.json(category)
        })
        .catch((err) => {
            res.json(err)
        })
}
