const users = require('../models/users');

exports.sign_up = (req, res) => {
    var newUser = new users({
        username: req.body.username,
        password: req.body.password
    })
    newUser.save()
        .then(success => {
            res.send(success);
        })
        .catch(err => {
            res.send(err);
        })
}