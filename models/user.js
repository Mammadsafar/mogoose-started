const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        // length: 20,
        
    },
    age:{
        type: Number,
    }
});


module.exports = mongoose.model('User', UserSchema);


// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         // length: 20,

//     },
//     age:{
//         type: Number,
//     }
// });



