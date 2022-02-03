const Product = require("../models/product.models");


module.exports.testResponce = (req,res) => {
    res.json({message:"hey its me!"})
}

module.exports.findAllProducts = (req,res) => {
    Product.find({})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.createProduct = (req,res) => {
    Product.create(req.body)
        .then(newProduct => res.json({results:newProduct}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.findOneProduct = (req,res) => {
    Product.findOne({_id:req.params._id})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.deleteProduct = (req,res) => {
    Product.deleteOne({_id:req.params._id})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}

module.exports.updateOneProduct = (req,res) => {
    Product.updateOne({_id:req.params._id}, req.body, {runValidators:true})
        .then(results => res.json({results:results}))
        .catch(err => res.status(400).json({message:"That didnt quite work.",err}))
}
