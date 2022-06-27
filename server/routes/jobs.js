const {Router}  = require('express')
const jobsRoute = Router()
const {jobsController} = require('../controllers')


jobsRoute.get('/',jobsController.getJobs)
jobsRoute.post('/create',jobsController.create)
jobsRoute.get('/search',jobsController.search)

module.exports = jobsRoute