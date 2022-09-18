const routes = require('express').Router();


const {showSomeone} = require("../controllers/contacts.controller")
routes.get("/", showSomeone)

module.exports = routes;