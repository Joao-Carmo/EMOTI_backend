const express = require('express');
const { TimeoutError } = require('sequelize/types');

const tutorController = require('../controllers/tutors.controller.js');

let router = express.Router({mergeParams: true})

router.route('/')
    .get(tutorController.getAll)
    .post(tutorController.create)
    .put(tutorController.changePassword);

// is this necessary?
router.route('/:id')
    .get(tutorController.getOne);

router.all('*', (req, res) => {
    res.status(404).json({message: 'page questions not found'});
})

module.exports = router;