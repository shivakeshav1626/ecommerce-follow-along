const mangoose = require('mangoose')
const bcrypt = require('bcrypt js')
const jwt=require('jsonwebtoken')

const userSchema = new mangoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    phoneNumber:{type:Number},
    password:{type:String,required:true,minLenght:4},
    avatar:{
        id:{type:String},
        url:{type:String}
    },
    address:[
        {
            country:{type:String,required:true},
            city:{type:String,required:true},
            address1:{type:String},
            address2:{type:String},
            pincode1:{type:Number,required:true}
        }
    ],
    role:{type:String,default:user},
    createAT:{type:DataTransfer, default:DataTransfer.now()}

})

userSchema.pre('save',async function(next) {
if(!this.modified("password"))
    return next()
  await bcrypt.hash(this.password,10)
  next()  
})
userSchema.methods.jsonTokens=function(){
    return jwt.sign({id:this._id},process.env.JWT_TOKEN,{expireIn1:process.env.Jwt_EXPIRES})
}