const mongoose=require("mongoose")

const schema=mongoose.Schema({
    postID:{
        type:mongoose.Types.ObjectId,
        ref:"post"
    },
    comment:String
})
export let comment=mongoose.model("comment",schema)
