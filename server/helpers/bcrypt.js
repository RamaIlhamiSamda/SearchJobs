const bcrypt = require('bcrypt')
const saltRound = process.env.SALTROUND || 10


const encryptPassword = (data)=>{
    return(
        bcrypt.hashSync(String(data),saltRound)
    )
}

const decryptPassword = (data,blurPassword)=>{
    return(
        bcrypt.compareSync(data,blurPassword)
    )
}

module.exports = {encryptPassword,decryptPassword}