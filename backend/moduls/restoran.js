const mongoose = require('mongoose')

var restoran = mongoose.Schema({
    name: {type: String}, 
    image: {type : String},
    like : {type: Number},
    dislike: {type: Number},
    distance: {type: Number},
    information : {type: String},
    menu : { type: Array},
    contact: {type: Array},
    address: {type: String},
    work_time: {type: String},
    special: {type: String}
})


module.exports = mongoose.model('restoran', restoran)