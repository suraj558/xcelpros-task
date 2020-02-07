const Attendance = require('../modals/attendance')


module.exports.list = (req,res) => {
    const { user } = req
    Attendance.find()
        .then((attendance) => {
            res.json(attendance)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.create = (req,res) => {
    const { body, user } = req
    //body.user = user._id
    const attendance = new Attendance(body)
    attendance.save()
        .then((attendance) => {
            Attendance.findOne({_id: attendance._id})
                .then((attendance) => {
                    res.send(attendance)
                })
                .catch((err) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.json(err)
        })
}

