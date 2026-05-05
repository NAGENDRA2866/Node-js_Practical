const Product = require("./models/products");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Ecom-CB")
    .then(()=>{
        console.log("DB conected")
    })
    .catch(()=>{
        console.log("DB not conected");
    })

const productsData = [
 {
    name:"Laptop",
    image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 200,
    desc: "a portable, clamshell-designed personal computer combining a display, keyboard, and pointing device into one unit powered by a rechargeable battery"
 },
]

Product.create(productsData)
    .then(()=>{
        console.log("product added")
    })