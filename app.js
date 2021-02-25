const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const api = require('./routers/api');


const mongoose = require('mongoose');


mongoose.connect(
    'mongodb://localhost:27017/maktab45', {
        useNewParser: true,
        useUnifiedTopology: true
    }
);






const ejs = require('ejs');

app.use(express.static(path.join(__dirname, "public")))

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs');

app.use('/', api);






















// app.get('/', (req, res) => {

// })
// console.log("req.url");
// app.get('/home', (req, res) => {
    
//         fs.readFile(path.join(__dirname, "public/product.json"), "utf8", (err, product) => {
//             if (err) {
//                 return res.status(400).send("oops! something went wrong");
//             };
    
//             product = JSON.parse(product);
    
    
    
//             if (!product) return res.status(404).send("product Not Found");
    
//             res.render('pages/home', {product});
//         })
    
//     })
//     app.get('/about', (req, res) => {
//         res.render('pages/about', {
//             user: {
//                 fname: "ali",
//                 lname: "rezaii"
//             }
//         })
    
//     })
//     app.get('/contact', (req, res) => {
//         res.render('pages/contact', {
//             user: {
//                 fname: "ali",
//                 lname: "rezaii"
//             }
//         })
    
//     })
//     app.get("/product/:id", (req, res) => {
//         fs.readFile(path.join(__dirname, "public/users.json"), "utf8", (err, data) => {
//             if (err) {
//                 return res.status(400).send("oops! something went wrong");
//             };
    
//             data = JSON.parse(data);
    
//             user = data.find(x => x.id == req.params.id);
    
//             if (!user) return res.status(404).send("User Not Found");
    
//             res.render('pages/home', user);
//         })
//     })
// app.get('img/:id', (req, res) => {
//     res.sendFile(path.join(__dirname, `img`, `${req.params.id}`));
// })




app.listen(5005);