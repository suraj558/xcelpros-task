const Invoice = require('../modals/invoice')

module.exports.create = (req,res) => {
    const { body, user } = req
   // body.user = user._id
    const invoice = new Invoice(body)
    invoice.save()
        .then((invoice) => {
            Invoice.findOne({_id: invoice._id})
                .then((invoice) => {
                    res.send(invoice)
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
    
    Invoice.find()
        .then((invoice) => {
            res.json(invoice)
        })
        .catch((err) => {
            res.json(err)
        })
}


