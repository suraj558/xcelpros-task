const Marks = require('../modals/stud-marks')


module.exports.list = (req,res) => {
    const { user } = req
    Marks.find()
        .then((mark) => {
            res.json(mark)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.create = (req,res) => {
    const { body } = req
  //  body.user = user._id
    const mark = new Marks(body)
    mark.save()
        .then((mark) => {
            Marks.findOne({_id: mark._id})
                .then((mark) => {
                    res.send(mark)
                })
                .catch((err) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.json(err)
        })
}

