const express = require('express');
const router = express.Router();

const blogger = require('./blogger')
const article = require('./article')
const comment = require('./comment')

const User = require('../models/user');


// fs.readFile('my.txt', function (err, users) {
    
// })


User.find({}, function (err, users) {
    if (err) return console.log(err);
    console.log(users);
})












router.use('/article', article);
router.use('/blogger', blogger);
router.use('/comment', comment);



// function logger() {
//     return function (req, res, next) {
//         console.log(req.url);
//         next();
//     }
// }
function logger1(req, res, next) {

    console.log(req.url);
    next();
}

router.get('/ejs', logger1, (req, res) => {
    res.render('index.ejs', {

            firstName: "ali",
            lastName: "rezaii"
    })

})






module.exports = router;