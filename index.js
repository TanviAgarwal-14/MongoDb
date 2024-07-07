const express = require('express');
const mongoose = require('mongoose');
const app = express()

app.use(express.json());

mongoose
    .connect(
        'mongodb+srv://tanvi:mongotanvi_14@cluster0.duz7ojy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    )
    .then(() => {
        console.log("DB Connected");
    })
    .catch((err) => {
        console.log("Failed", err);
    })


//ProductSchema

const ProductSchema = new mongoose.Schema({
    product_name:{
        type:String,
        required:true
    },
    product_price:{
        type:String,
        required:true
    },
    isInStock:{
        type:Boolean,
        required:true
    },
    category:{
        type:String,
        required:true
    }


})


const productModel = mongoose.model('products', ProductSchema);

//create

app.post('api/products', async (req, res) => {

    const product = productModel.create({
        product_name: req.body.product_name,
        product_price: req.body.product_price,
        isInStock: req.body.isInStock,
        category: req.body.category
    })

    console.group(product)

    return res.status(201).json({message:"Product Created"})
});

app.listen(8086, () => {
    console.log('Server started at port 8086')
})