const Assignment = require('../modals/assignment')


module.exports.list = (req,res) => {
    const { user } = req
    Assignment.find()
        .then((assignment) => {
            res.json(assignment)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.create = (req,res) => {
    const { body} = req
   // body.user = user._id
    const assignment = new Assignment(body)
    assignment.save()
        .then((assignment) => {
            Assignment.findOne({_id: assignment._id})
                .then((assignment) => {
                    res.send(assignment)
                })
                .catch((err) => {
                    res.send(err)
                })
        })
        .catch((err) => {
            res.json(err)
        })
}


