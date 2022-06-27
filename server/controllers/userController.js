const{jobs,user} = require('../models')
const {decryptPassword} = require('../helpers/bcrypt')
const {tokenGenerator,tokenVerifier} = require('../helpers/jsonwebtoken')

class userController {
    static async getUser(req,res){
        try{
            let result = await user.findAll({
                
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    static async create(req,res){
        try{
            const{name,userName,password} = req.body
            let result = await user.create({
                name,userName,password
            })
            res.status(200).json(result)
        }
        catch(err){
            res.status(404).json(err)
        }
    }
    static async login(req,res){
        try{
            const{userName,password} = req.body
            
            
            let foundEmail = await user.findOne({
                where : {userName}
            })
            if(foundEmail){
                if(decryptPassword(password,foundEmail.password)){
                    let access_token = tokenGenerator(foundEmail)
                    res.status(200).json({access_token})
                    
                    let verifyToken = tokenVerifier(access_token)
                   console.log(verifyToken)
                    
                }
                else{
                    res.status(404).json({
                        message : "password is false"
                    })
                }
            }
            else{
                res.status(404).json(err)
            }
        }
        catch(err){
            res.status(404).json({
                message : "userName is not found"
            })
        }
    }
    
}
module.exports = userController

