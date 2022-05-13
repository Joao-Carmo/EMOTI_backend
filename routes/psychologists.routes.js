const express = require('express');
const { TimeoutError } = require('sequelize/types');

const psychologistsController = require('../controllers/psychologists.controller.js');

let router = express.Router({mergeParams: true})

router.route('/')
    .get(psychologistsController.getAll)
    .post(psychologistsController.create)
    .put(psychologistsController.changePassword);

// is this necessary?
router.route('/:id')
    .get(psychologistsController.getOne);

router.all('*', (req, res) => {
    res.status(404).json({message: 'page questions not found'});
})

module.exports = router;