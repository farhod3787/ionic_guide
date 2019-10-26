const express = require('express')
const router = express.Router();
const Restoran = require('../moduls/restoran')

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
    var restoran = {
        name: body.name,
        image: file.filename,
        like: body.like,
        dislike: body.dislike,
        distance: body.distance,
        information: body.information,
        menu: body.menu,
        contact: body.contact,
        address: body.address,
        work_time: body.work_time,
        special: body.special
    }
    console.log(restoran)
    var restoran = new Restoran(restoran);
    restoran.save().then( doc =>{
        response.send(doc)
    }).catch( err =>{
        response.status(400).json(err)    
    })
})

router.get('/getall', async (request, response) =>{
    let restoran = await Restoran.find();
    if (restoran.image) {
        restoran.image = "/images/" + restoran.image;
    }
    response.status(200).json(restoran)

    // Hotel.find().then( res =>{
    //     response.status(200).json(res)
    // }).catch( err =>{
    //     response.status(400).json(err)
    // })
})

router.get('/get/:id', (request, response) => {
        var id = request.params.id;
        Restoran.findById(id).then(res =>{
                response.status(200).json(res)
         }).catch ( err =>{
             console.log(err);
             response.status(400).json(err)
         })
})

router.delete('/:id', (request, response) =>{
    var id = request.params.id;
    Restoran.findByIdAndDelete(id).then( res =>{
        if(res) {
            response.status(200).json()
        }
        else {
            response.status(400).json()
        }
    }).catch (err =>{
            response.status(400).json(err)    
    })
})
module.exports = router