const UserModel = require("../models/user")

exports.createUsers = async (req, res) => {
    await UserModel.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        createdAt: req.body.createdAt
    });
    return res.status(201).json({ message: "user created"});
}

// exports.getAllUsers = async.(req, res) => {
//     const = AllUsers = await UserModel.find({})
// }

exports.getById = async(req, res) => {
    const users = await UserModel.findById(req.params.id)
    return res.json(users)
}

exports.updateUser = async(res, req) => {
    const updateUser = await UserModel.findByIdAndUpdate(req.params.id, req.body)
    return res.json(updateUser)
}

exports.deleteUser = async(res, req) => {
    const deleteUser = await UserModel.findByIdAndDelete(req.params.id)
    res.json(deleteUser)
}