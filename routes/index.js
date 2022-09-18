const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.send('Troy Davidson')
} )

module.exports = routes;