const db = require("../models/index.js");
const Psychologist = db.psychologist;

exports.getAll = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}

exports.create = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}

exports.changePassword = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}

exports.getOne = async (req, res) => {
    res.status(200).json({ message: 'All okay'})
}
