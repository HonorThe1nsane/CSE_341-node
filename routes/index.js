const routes = require('express').Router();


const { showSomeone } = require("../controllers/contacts")
const { showSomeone1 } = require("../controllers/contacts")
routes.get("/", showSomeone)
routes.get("/", showSomeone1)
module.exports = routes;