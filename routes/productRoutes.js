const router = require('express').Router()


const productController = require("../controllers/productController")

// create

router.post('/', productController.createProducts);

// get route
 
router.get('/', productController.getAllProducts);

// Get product by id

router.get('/:id', productController.getById);

// update 

router.put('/:id', productController.updateProduct);

// delete the product

router.delete('/:id', productController.deleteProduct);

module.exports = router