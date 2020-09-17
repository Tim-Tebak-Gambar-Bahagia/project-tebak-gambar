const routes = require('express').Router()
const PlayerController = require('../controllers/PlayerController')

routes.get('/', (req, res, next) => {
    res.send('Lets Gooo Tebak Gambar!!')
})

// SHOW THE PLAYERS
routes.get('/players', PlayerController.getAll)

// ADD PLAYERS
routes.post('/players', PlayerController.addPlayer)


module.exports = routes