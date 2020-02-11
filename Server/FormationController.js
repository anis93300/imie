const express = require('express')
const router = express.Router();
const Formations = require('./model/Formations')

router.get('/', (request, response) => {
    Formations.findAll({}).then(dbFormation => {
        response.json(dbFormation)
    }).catch(err => {
        response.send(err.message);
    });

});

router.post('/',(request, response) => {
    //ajout
    Formations.create(request.body).then(dbFormation => {
        response.json(dbFormation)
    }).catch(err => {
        response.send(err.message);
    });



});

router.put((request, response) => {
    response.send("aaaa");



});

router.delete((request, response) => {
    response.send("delete");



});


module.exports = router;