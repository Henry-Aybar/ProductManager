const ProductController = require("../controllers/product.controller");
const Product = require("../models/product.models");

module.exports = app => {
    app.get("/api/test", ProductController.testResponce);

    app.get("/api/products/findAll", ProductController.findAllProducts);

    app.post("/api/products/create", ProductController.createProduct);

    app.get("/api/products/product/:_id", ProductController.findOneProduct);

    app.delete("/api/products/:_id/delete", ProductController.deleteProduct);

    app.patch("/api/products/:_id/update", ProductController.updateOneProduct);

    

    
}