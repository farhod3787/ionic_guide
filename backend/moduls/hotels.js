const mongoose = require('mongoose')

var hotel = mongoose.Schema({
    name: {type: String}, 
    image: {type : String},
    like : {type: Number},
    dislike: {type: Number},
    distance: {type: Number},
    price: {type: String},
    information : {type: String},
    tarif : { type: Array},     
    comfort: { type: Array},
    sharoit : { type: Array}

})


module.exports = mongoose.model('hotel', hotel)