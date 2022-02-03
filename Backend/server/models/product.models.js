const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    //name, price, description, numLegs
   title:{
        type: String,
        required: [true, "You need a Title!"],
        minLength: [4, "You need at leat 4 Characters!!"]
    },
    price:{
        type: Number,
        min: 0
    },
    description:{
        type: String,
        required: [true, "Describe your product please!"],
        minLength: [3, "You need at least 3 Characters!!"]
    },
    numLegs:{
        type: Number,
        min: 0
    }
}, {timestamps:true})

const Product = mongoose.model("Product",ProductSchema);

module.exports = Product;