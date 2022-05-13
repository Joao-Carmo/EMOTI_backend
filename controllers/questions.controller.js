const db = require("../models/index.js");
const Question = db.question;

exports.getAll = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}

exports.create = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}


exports.answer = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}

exports.getOne = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}
