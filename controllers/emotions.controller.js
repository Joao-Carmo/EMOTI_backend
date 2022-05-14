const db = require("../models/index.js");
const Emotion = db.emotion;

exports.create = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}

exports.changeEmotion = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}

exports.getOne = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}
