const u = require('express');
const User = require('../models/user');

// Signing Up User
exports.createUser = async (req, res) => {
    try {
        const {firstName, lastName, phoneNumber, email, password} = req.body;

        let newUser = new User({
            firstName,
            lastName,
            phoneNumber,
            email,
            password
        });

        newuser = await newUser.save();

        res.status(201).json(newUser);
    }
    catch (u) {
        res.status(500).json({ error: u.message })
    }
}

// Finding All user
exports.users = async (req, res) => {
    try {
        const users = await User.find({});

        res.json(users);
    }
    catch (u) {
        res.status(500).json({ error: u.message });
    }
}

//Finding Any User by their ID

exports.findByIduser = async (req, res) => {
    try {
        const findByIduser = await User.findById(req.params.id);

        res.json(findByIduser);
    }
    catch (u) {
        res.status(500).json({ error: u.message });
    }
}

// Updating User Info

exports.updateUser = async (req, res) => {
    try {
        const {firstName, lastName, phoneNumber, email, password} = req.body;

        let updatedUser = new User({
                firstName,
                lastName,
                phoneNumber,
                email,
                password,
                _id: req.params.id
            });
        updatedUser = await User.findByIdAndUpdate(req.params.id, updatedUser);

        res.json({message: `User of id ${req.params.id} updated successfully`});
    }
    catch (u) {
        res.status(500).json({ error: u.message });
    }
}

// Deleting A User
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndRemove(req.params.id);

        res.json({ message: `User with id ${req.params.id} deleted successfully!` });
    }
    catch (u) {
        res.status(500).json({ error: u.message });
    }
}