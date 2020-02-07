const Payslip = require('../modals/payslip')

module.exports.create = (req,res) => {
    const { body, user } = req
    //body.user = user._id
    const payslip = new Payslip(body)
    payslip.save()
        .then((payslip) => {
            Payslip.findOne({_id: payslip._id})
                .then((payslip) => {
                    res.send(payslip)
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
    Payslip.find()
        .then((payslip) => {
            res.json(payslip)
        })
        .catch((err) => {
            res.json(err)
        })
}

