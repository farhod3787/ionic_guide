const express = require('express')
const router = express.Router();
const Hotel = require('../moduls/hotels')

const multer = require('multer');

const MIME_TYPE_MAP = {
    'image/png': 'png',
    'image/jpg': 'jpg',
    'image/jpeg': 'jpg'
}


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE_MAP[file.mimetype];
        let error = new Error("Errorrr");
        if (isValid) {
            error = null;
        }
        cb(error, "backend/images");
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const ext = MIME_TYPE_MAP[file.mimetype];
        cb(null, name + '-' + Date.now() + '.' + ext);
    }
})


router.post('/create', multer({ storage: storage }).single('image'), (request, response) =>{
    var body = request.body;
    const file = request.file;
    var hotel = {
        name: body.name,
        image: file.filename,
        like: body.like,
        dislike: body.dislike,
        distance: body.distance,
        price: body.price,
        information: body.information
    }
    console.log(hotel)
    var hotel = new Hotel(hotel);
    hotel.save().then( doc =>{
        response.send(doc)
    }).catch( err =>{
        response.status(400).json(err)    
    })
})

router.get('/getall', async (request, response) =>{
    let hotel = await Hotel.find();
    if (hotel.image) {
        hotel.image = "/images/" + hotel.image;
    }
    response.status(200).json(hotel)

    // Hotel.find().then( res =>{
    //     response.status(200).json(res)
    // }).catch( err =>{
    //     response.status(400).json(err)
    // })
})

router.get('/get/:id', (request, response) => {
        var id = request.params.id;
        Hotel.findById(id).then(res =>{
                response.status(200).json(res)
         }).catch ( err =>{
             console.log(err);
             response.status(400).json(err)
         })
})

module.exports = router