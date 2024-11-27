const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

  exports.postAddproduct = (req, res, next) => {
    // after model work static product function access
    const product = new Product(req.body.title);
    product.save();
    //beofre model code use product variable and push data
    //products.push({title:req.body.title});
    console.log(req.body);
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
//announmous function 
    const products = Product.fetchAll((products)=>{
        res.render('shop', {
            prods: products,
            pageTitle: 'Shop',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true,
            productCSS: true
          });
    });
    
  };