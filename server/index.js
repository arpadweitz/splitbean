const express = require('express');
const app = express(); 
const mongoose = require('mongoose');
app.use(require("cors")());
require("dotenv").config();
const port = process.env.PORT || 5050; 

// to print incoming requests from mongoose in the terminal
mongoose.set('debug',true)
// =================== setting to use the body of a request ===================
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// serving static files
const path = require('path');
app.use('/assets', express.static(path.join(__dirname, 'public/pictures')));

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

// ADMINJS

// first install adminjs and the dependencies
// npm i adminjs @adminjs/express @adminjs/mongoose  tslib express-formidable express-session

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


    connecting().then(()=>{
        app.listen(port, () => console.log(`listening on port ${port}`))
    })
