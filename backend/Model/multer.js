const multer = require('multer')

const  storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'upload/')

    },
    filename:(req,file,cb)=>{
        const uniqueSuffix =  Date.now()+Math.round(Math.random()*1e9)
        const fileName = file.originalname.split('.')[0]
        cb(null,fileName+uniqueSuffix+'.png')

    }
})
const upload = multer({storage:storage})
module.exports=upload