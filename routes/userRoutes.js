
const router = require('express').Router()

const userController = require("../controllers/userController")

router.post('/', userController.createUsers);

router.get('/:id', userController.getById)

router.put('/:id', userController.updateUser);

router.delete('/:id', userController.deleteUser);

module.exports = router