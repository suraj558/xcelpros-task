const Faculty = require('../modals/faculty')


module.exports.list = (req,res) => {
    //const { user } = req
    Faculty.find()
        .then((faculty) => {
            res.json(faculty)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.create = (req,res) => {
    module.exports.create = (req,res) => {
        const { body } = req
        const faculty = new Faculty(body)
        faculty.save()
            .then((faculty) => {
                Note.findOne({_id: faculty._id})
                    .then((faculty) => {
                        res.send(faculty)
                    })
                    .catch((err) => {
                        res.send(err)
                    })
            })
            .catch((err) => {
                res.json(err)
            })
    }
    
}


