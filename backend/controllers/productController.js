const e = require('express');
const Product = require('../models/product');

exports.createProduct = async (req, res) => {
    try {
        const {title, description, price, imgUrl} = req.body; // Object destructering 

        let newProduct = new Product({
                title,
                description,
                price,
                imgUrl
            });
        
        newProduct =  await newProduct.save();

        res.status(201).json(newProduct);
    } 
    catch (e) {
        res.status(500).json({ error: e.message }) 
    }
};

// Product Viewing
exports.products = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};

//Finding by ID
exports.product = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        res.json(product);
    } catch (e) {
        res.status(500).json({ error: e.message });
    }
};


//Product Update
exports.updateProduct = async (req, res) => {
    try {
        const {title, description, price, imgUrl} = req.body; // Object destructering 

        let updatedProduct = new Product({
                title,
                description,
                price,
                imgUrl,
                _id: req.params.id
            });
        
        updatedProduct =  await Product.findByIdAndUpdate(req.params.id, updatedProduct);

        res.json({message: `Product with id ${req.params.id} updated successfully!`});
    } 
    catch (e) {
        res.status(500).json({ error: e.message }) 
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndRemove(req.params.id);

        res.json({ message: `Product with id ${req.params.id} deleted successfully!` });
    }
    catch (e) {
        res.status(500).json({ error: e.message })
    }
}