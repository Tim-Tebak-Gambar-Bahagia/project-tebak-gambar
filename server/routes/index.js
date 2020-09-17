const routes = require('express').Router()

routes.get('/', (req, res, next) => {
    res.send('Lets Gooo Tebak Gambar!!')
})


module.exports = routes