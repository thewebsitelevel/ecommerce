const fs = require('fs');
const path = require("path");

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'Cart.json'
  );


module.exports= class Cart{
    static addProduct(id, productPrice){
        //fetch previous cart
        fs.readFile(p, (err, fileContent) =>{
            let cart = {products:[], totalprice:0}
            if(!err){
                cart = JSON.parse(fileContent)
            }
        //analyse previous cary => if existiong product
            const existingProductIndex = cart.products.findIndex(prod => prod.it === id);
            const existingProduct = cart.products[existingProductIndex];
            let updatedProduct;
        //add new product to the cart
            if(existingProduct){
                updatedProduct = {...existingProduct};
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products= [...cart.products];
                cart.products[existingProductIndex]= updatedProduct;
            }else{
                updatedProduct={id:id, qty: 1}
                cart.products = [...cart.products, updatedProduct];
            }
            cart.totalprice= cart.totalprice + +productPrice;
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                console.log(err)
            });
        });      
    }
}