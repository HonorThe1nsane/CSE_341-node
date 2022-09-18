const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.send('Harmony Davidson')
} )

module.exports = routes;