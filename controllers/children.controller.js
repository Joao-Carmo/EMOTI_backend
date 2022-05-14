const db = require("../models/index.js");
const Chil = db.child;

exports.getAll = async (req, res) => {
    res.status(200).json({ success: true, message: 'Child users successfully retrieved'})
}

exports.create = async (req, res) => {
    res.status(201).json({ success: true, message: "New user created.", username: `${newUser.username}` })
    res.status(201).json({ message: "User added.", URL: `/child/${newUser.username}` })
}

exports.changePassword = async (req, res) => {
    res.status(200).json({ success: true, message: 'Password was successfully changed.'})
}

exports.getOne = async (req, res) => {
    res.status(200).json({ success: true, message: 'User was found', username: `${user.username}`})
}
