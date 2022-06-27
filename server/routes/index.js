const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    res.send(200).json({
        message:"dashboard api"
    })
})

const userRoute = require('./user')
const jobsRoute = require('./jobs')

route.use('/user',userRoute)
route.use('/jobs',jobsRoute)

module.exports = route