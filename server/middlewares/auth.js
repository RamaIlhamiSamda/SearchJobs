const {tokenVerifier} = require('../helpers/jsonwebtoken')

const authentication = (req,res,next)=>{
    const access_token = req.headers.access_token

    if(access_token){
        console.log('ada akses token')
        try{
            let verifyToken = tokenVerifier(access_token)
            req.userData = verifyToken
            next()
        }
        catch(err){
            res.status(404).json({
                message:"token tidak terauthentication"
            })
        }
    }
    else{
        res.status(404).json({
            message : "token ga ada"
        })
    }
}

module.exports = {authentication}