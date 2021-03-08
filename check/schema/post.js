const mongoose=require("mongoose")

const schema=mongoose.Schema({
    title:String,
    explain:String,
    comment:[{
        type:mongoose.Types.ObjectId,
        ref:"comment"
    }]
})

export let post = mongoose.model("post",schema)