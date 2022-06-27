const express = require('express')
const app = express()
const route = require('./routes')
const port = process.env.PORT||3000
const cors = require('cors')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'static'))
app.use(cors())
app.use(route)

app.listen(port,() =>{
    console.log(`app is listening on port ${port}`)
})

