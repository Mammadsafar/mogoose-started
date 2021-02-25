const express = require('express');
const router = express.Router();





router.get('/article', function (req, res){
    res.send("Get All");
})

router.get('/article/:id', function (req, res){
    res.send("get Single");
})
router.post('/article', function (req, res){
    res.send("post");
})


router.delete('/article', function (req, res){
    res.send("delete");
})

router.put('/article', function (req, res){
    res.send("put");
})



module.exports = router;