const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = require('./routes')
const cors = require('cors')

//CORS
app.use(cors())

//BODY PARSER
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//ROUTER
app.use(routes)


app.listen(port, () => {
    console.log(`Listen on http://localhost:${port}`)
})
