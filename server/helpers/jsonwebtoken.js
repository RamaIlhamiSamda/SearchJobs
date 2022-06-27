var jwt = require('jsonwebtoken')
const secretCode = process.env.SECRETCODE || 'rahasia'

const tokenGenerator = (data)=>{
    const {id,name,userName} = data
    return jwt.sign({
        id,name,userName},secretCode)
}

const tokenVerifier = (data) =>{
    return jwt.verify(data,secretCode)
}

module.exports = {tokenGenerator,tokenVerifier}