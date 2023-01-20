/*********************************************************************************
 *  WEB322 – Assignment 1
 *  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.
 *  No part of this assignment has been copied manually or electronically from any other source
 *  (including web sites) or distributed to other students.
 *
 *  Name: _______MD Sajidur Rahman_______________ Student ID: ________115695207______ Date: ______________1/14/2023__
 *
 *  Online (Cyclic) URL: ________________
    https://tired-teal-bonobo.cyclic.app
    _______________________________________
 *
 ********************************************************************************/

var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();

// setup a 'route' to listen on the default url path
app.get("/", (req, res) => {
  res.send("MD SAJIDUR RAHMAN, 115695207");
});

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT);
