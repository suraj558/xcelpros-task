const { User } = require('../modals/User')
const _ = require('lodash')


// user registration
module.exports.register = (req,res) => {
    new User(req.body).save()
        .then((user) => {
            res.send(_.pick(user,['_id','username','role', 'email']))
        })
        .catch((err) => {
            res.send(err)
        })
}

// user login
module.exports.login = (req,res) => {
    const { email, password } = req.body
    User.findByCredentials(email,password)
        .then((user) => {
            if(user.role==='admin'){
                user.generateToken()
                .then((token) => {
                    res.send({message:'Welcome Admin',token})
                })
                .catch((err) => {
                    res.send(err)
                })
            }

            else if(user.role==='faculty'){
               // res.send('Welcome Faculty')
                user.generateToken()
                .then((token) => {
                    res.send({message:'Welcome Faculty',token})
                })
                .catch((err) => {
                    res.send(err)
                })
            }

            else if(user.role==='hod'){
                //res.send('Welcome HOD')
                user.generateToken()
                .then((token) => {
                    res.send({message:'Welcome HOD',token})
                })
                .catch((err) => {
                    res.send(err)
                })
            }
            else if(user.role==='principal'){
               // res.send('Welcome Principal')
                user.generateToken()
                .then((token) => {
                    res.send({message:'Welcome Principal',token})
                })
                .catch((err) => {
                    res.send(err)
                })
            }

            else{
               // res.send('Welcome Accountant')
                user.generateToken()
                .then((token) => {
                    res.send({message:'Welcome Accountant',token})
                })
                .catch((err) => {
                    res.send(err)
                })
            }
            
        })
        .catch((err) => {
            res.send(err)
        })
}

module.exports.account = (req,res) => {
    const user = _.pick(req.user, ['username', 'email',' role'])
    res.send(user)
}


// user logout
module.exports.logout = (req,res) => {
    const { user, token } = req
    User.findByIdAndUpdate(user._id, {$pull: {tokens: {token: token}}})
        .then(() => {
            res.send('Successfully logged out')
        })
        .catch((err) => {
            res.send(err)
        })
}