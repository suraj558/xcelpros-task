const Student = require('../modals/student')


module.exports.list = (req,res) => {
    //const { user } = req
    Student.find()
        .then((student) => {
            res.json(student)
        })
        .catch((err) => {
            res.json(err)
        })
}

module.exports.create = (req,res) => {
    const { body } = req
    const student = new Student(body)
    student.save()
        .then((student) => {
            Student.findOne({_id: student._id})
                .then((student) => {
                    res.send(student)
                })
                .catch((err) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.json(err)
        })
}

