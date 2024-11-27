const path = require('path');
const express = require('express');

const rootDir = require('../util/path');
//const productsController = require('../controllers/products');
const adminController = require('../controllers/admin');

const router = express.Router();


const products = [];

 //const app = express();

 //router.get('/add-product',productsController.getAddProduct);

//we can use this code inside to controller when we code optimize
/*router.get('/add-product',(req, res, next)=>{ // middleware 
    //for add-product.pug file sending data
    res.render('add-product', {pageTitler:"Add product"});
   // res.sendFile(path.join(rootDir,'views', 'add-product.html'));
   // console.log();
  //  next(); //allow the request to continue tot the next middleware 
})*/
//router.post('/add-product',productsController.postAddproduct);

/*router.post('/add-product', (req, res, next) => {
    products.push({title:req.body.title});
    console.log(req.body);
    res.redirect('/');
});*/

router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

module.exports = router;
// exports.routes = router;
// exports.products = products;


