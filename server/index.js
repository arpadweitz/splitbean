const express = require('express');
const app = express(); 
const mongoose = require('mongoose');

// Cors settings // 
const cors = require("cors"); // to send request from different url
app.use(require("cors")());
//or enable it only for the specific url
app.options("/sendEmail", cors());

// allowing requests from the front-end to our server with api calls
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
  });
  

require('dotenv').config({ path: './.env' });

const port = process.env.PORT || 5050; 

// to print incoming requests from mongoose in the terminal
mongoose.set('debug',true)
// =================== setting to use the body of a request ===================
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// serving static files

const path = require('path');
app.use('/assets', express.static(path.join(__dirname, 'public/pictures')));


app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});



// to print incoming requests from mongoose in the terminal
mongoose.set('debug',true)

 
// connecting to mongo and checking if DB is running
async function connecting(){
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected to the DB')
    } catch ( error ) {
        console.log('ERROR: Seems like your DB is not running, please start it up !!!');
    }
    }
    
    // redirect to routers

app.use('/category', require('./routes/categories'));
app.use('/product', require('./routes/products'));
app.use('/payment', require('./routes/payment.route.js'));
app.use("/emails", require("./routes/emails.routes.js"));


// ADMINJS

// first install adminjs and the dependencies
// npm i adminjs @adminjs/express @adminjs/mongoose  tslib express-formidable express-session

const NODE_ENV = process.env.NODE_ENV // <-- check the environment
if(NODE_ENV==='dev') {
// require adminjs
const AdminJS = require("adminjs");
// require express plugin
const AdminJSExpress = require("@adminjs/express");
// require mongoose adapter
AdminJS.registerAdapter(require("@adminjs/mongoose"));
// Import all the project's models
const Categories = require("./schema/categories"); // replace this for your model
const Products = require("./schema/products"); // replace this for your model
// set up options -- models to use and a route to open dashboard
const adminOptions = {
  resources: [Categories, Products],
  rootPath: "/admin",
};
// initialize adminjs
const admin = new AdminJS(adminOptions);
// build admin route
const router = AdminJSExpress.buildRouter(admin);
app.use(admin.options.rootPath, router);
// end ADMINJS
}

    connecting().then(()=>{
        app.listen(port, () => console.log(`listening on port ${port}`))
    })
