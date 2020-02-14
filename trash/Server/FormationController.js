const express = require('express')
const router = express.Router();
const Formations = require('./model/Formations')
const { Op } = require('sequelize');

router.get('/', (request, response) => {
    Formations.findAll({}).then(dbFormation => {
        response.json(dbFormation)
    }).catch(err => {
        response.send(err.message);
    });

});

router.post('/', (request, response) => {
    //ajout
    Formations.create(request.body).then(dbFormation => {
        response.json(dbFormation)
    }).catch(err => {
        response.send(err.message);
    });



});

router.put('/', (request, response) => {
    Formations.update( request.body,{
        where: {
            id: {
                [Op.eq]: request.body.id
            }
        }
    }).then(dbFormation => {
        response.json(request.body)
    }).catch(err => {
        response.send(err.message);
    });


});

router.delete("/",(request, response) => {

    Formations.destroy({
        where: {
            id: {
                [Op.eq]: request.body.id
            }
        }
    }).then(dbFormation => {
        response.json(request.body)
    }).catch(err => {
        response.send(err.message);
    });


});


module.exports = router;