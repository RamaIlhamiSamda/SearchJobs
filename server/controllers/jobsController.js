const {jobs,user} = require('../models')

class jobsController {
    static async getJobs(req,res){
        
        try{
            let result = await jobs.findAll({
                
            })
        res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    static async create(req,res){
        try{
            const {jobName,description,location,fullTime,information,jobdesk,spesification} = req.body
            

            let result = await jobs.create({
                jobName,description,location,fullTime,information,jobdesk,spesification
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    static async search(req,res){
        try{   
            
            let result = await jobs.findAll({
                
            })
            res.status(201).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
}

module.exports = jobsController