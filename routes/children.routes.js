const express = require('express');
const { TimeoutError } = require('sequelize/types');

const childController = require('../controllers/children.controller.js');

let router = express.Router({mergeParams: true})

router.route('/')
    .get(childController.getAll)
    .post(childController.create)
    .put(childController.changePassword);

// is this necessary?
router.route('/:id')
    .get(childController.getOne);

router.all('*', (req, res) => {
    res.status(404).json({message: 'page questions not found'});
})

module.exports = router;