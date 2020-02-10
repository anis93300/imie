const express = require('express')
const router = express.Router();

router.get('/',(request, response) => {
    response.send("aaaa");



});

router.post((request, response) => {
    //ajout
    response.send("aaaa");


    
});

router.put((request, response) => {
    response.send("aaaa");


    
});

router.delete((request, response) => {
    response.send("delete");


    
});


module.exports = router;