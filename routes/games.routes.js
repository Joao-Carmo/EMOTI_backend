const express = require('express');

const gameController = require('../controllers/games.controller.js');

//to write
// const emotionsRouter = require('../routes/emotions.router.js');

let router = express.Router({mergeParams: true})

router.route('/')
    .get(gameController.getAll)
    .post(gameController.create);

// is this necessary?
router.route('/:id')
    .get(gameController.getOne);



router.all('*', (req, res) => {
    res.status(404).json({message: 'page questions not found'});
})

module.exports = router;