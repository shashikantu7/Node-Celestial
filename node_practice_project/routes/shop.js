const path = require('path');
const express = require('express');
const router = express.Router();
const adminData = require('./admin');

const rootDir = require('../util/path');
const shopController = require('../controllers/shop');
//const app = express();

// router.get('/', (req, res, next) => {
//   //  res.sendFile(path.join(__dirname,'../', 'views', 'shop.html'));
//     res.sendFile(path.join(rootDir, 'views', 'shop.html'));
// });

//for pub use get function

//router.get('/', productsController.getProducts);

/*router.get('/', (req, res, next) => {
    const products = adminData.products;
    //prods key pass in shop.pub in loop
    res.render('shop',{prods:products, dcoTitle:'Shop'})
});*/

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
