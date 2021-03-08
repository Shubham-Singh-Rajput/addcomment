const mongoose=require("mongoose")
let mongoUri='mongodb://localhost:27017/blogs'

let connect=async()=>{
    try{
        await mongoose.connect(mongoUri,{ useUnifiedTopology: true , useNewUrlParser: true })
        console.log("connected")
    }
    catch(e){
        console.log("connecting error in mongodb",e.message)
    }
}
export default{connect}