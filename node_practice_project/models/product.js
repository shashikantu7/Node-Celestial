// const fs = require('fs');
// const path = require('path');

// const products = [];

// //const getProductsFromFile = 

// module.exports = class Product {
//     constructor(title){
//         this.title = title;

//     }
//     save(){
//         //using file uploading and using path
//         const p = path.join(path.dirname(process.mainModule.filename),'data', 'products.json');
//         fs.readFile(p, (err, fileContent) => {
//             let products = [];
//             if (!err) {
//               products = JSON.parse(fileContent);
//             }
//             products.push(this);
//             fs.writeFile(p, JSON.stringify(products), err => {
//               console.log(err);
//             });
//           });
//         products.push(this);
//     }
//     static fetchAll(cb){
//         const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');
//         fs.readFile(p,(err,fileContent)=>{

//             if(err){
//                cb([]);
//             }
//            cb(JSON.parse(fileContent));
//         });
//        // return products;
//     }
// }


const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
   return db.execute('INSERT INTO products(title, price, imageUrl, description)VALUES(?,?,?,?)',
    [this.title, this.price, this.imageUrl, this.description]
   );
  }

  static deleteById(id) {
    
  }

  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    
  }
};


