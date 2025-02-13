const express = require('express');

const emotionsController = require('../controllers/emotions.controller.js');

let router = express.Router({mergeParams: true})

router.route('/')
    .post(emotionsController.create)
    .put(emotionsController.changeEmotion);

router.route('/:idE')
    .get(emotionsController.getOne);

router.all('*', (req, res) => {
    res.status(404).json({message: 'page questions not found'});
})

module.exports = router;