const path = require('path');
const http = require("http");
const routes = require("./routes");
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const db = require('./util/database');

//using pug for view it is working for compile code
// app.set('view engine', 'pug');
// app.set('views', 'views');

//working for seprate folder ejs file
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRouters = require('./routes/shop');

//using database sql getting table data 
db.execute('SELECT * FROM products').then( result =>{
  console.log(result[0], result[1]);
}).catch(err =>{
  console.log(err);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/admin',adminRouters);
app.use('/admin',adminData);
app.use(shopRouters);

// app.use('/',(req, res, next)=>{ 
//     console.log("this code always runs");
//     next(); //middleware
// })

// app.use('/add-product',(req, res, next)=>{ // middleware 
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
//    // console.log();
//   //  next(); //allow the request to continue tot the next middleware 
// })
// app.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// app.use('/', (req, res, next) => {
//     res.send('<h1>Hello from Express!</h1>');
//   });

app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>');
  });

//const server = http.createServer(routes.handler); //using routes file it is event loop single thread programming
// const server = http.createServer(app);  // when use http then use this code
// server.listen(3000);

app.listen(3000);