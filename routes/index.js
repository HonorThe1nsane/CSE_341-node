const routes = require('express').Router();


const { showSomeone } = require("../controllers/contacts")

routes.get("/", showSomeone)

module.exports = routes;