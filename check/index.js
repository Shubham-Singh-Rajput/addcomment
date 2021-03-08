import "babel-polyfill"
import bodyParser from "body-parser"
import connection from "./schema/connect"

import { post } from './schema/post';
import { comment } from './schema/comment';
import  mongoose  from "mongoose";
connection.connect()
const server=require("express")
const app=server()
app.use(bodyParser.json())

app.post('/post',async(req,resp)=>{
    console.log(req.body)
    let blog=new post({
        ...req.body
    })
    await blog.save()
    return resp.json({
        blog:blog
    })

})
app.post("/:postID/comment",async(req,resp)=>{
    let postId=mongoose.Types.ObjectId(req.params.postID)
    const comments=new comment({
        ...req.body,
        postID:postId
        })
    await comments.save()
    let blogFind=await post.find({_id:postId})
    blogFind[0].comment.push(comments._id)
    await blogFind[0].save()
    resp.json({
        blogFind:blogFind
    })
})

app.get("/:postID/read",async(req,resp)=>{
    let postId=mongoose.Types.ObjectId(req.params.postID)
    let blogFind=await post.find({_id:postId}).populate("comment")
    resp.json({
        blogFind:blogFind
    })
})


app.listen(2000)