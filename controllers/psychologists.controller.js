const db = require("../models/index.js");
const Psychologist = db.psychologist;

exports.getAll = async (req, res) => {
    res.status(200).json({ success: true, message: 'Psychologist users successfully retrieved'})
}

exports.create = async (req, res) => {
    res.status(201).json({ success: true, message: "New user created.", username: `${newUser.username}` })
    res.status(201).json({ message: "User added.", URL: `/psycgologist/${newUser.username}` })
}

exports.changePassword = async (req, res) => {
    res.status(200).json({ success: true, message: 'Password was successfully changed.'})
}

exports.getOne = async (req, res) => {
    res.status(200).json({ success: true, message: 'User was found', username: `${psychologist.username}`})
}
