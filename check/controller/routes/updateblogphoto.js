import  mongoose  from 'mongoose';
import { blog } from './../../model/schema/blog';
let updateblogphoto={
    updateblogphoto:(req,resp)=>{
        // console.log(req.query)
        if(req.query.id){
            return resp.render("updateblogphoto.hbs",{
                ...req.query
            })
        }
        else{
            return resp.redirect('/allBlogs')
        }
    },
    postupdateblogphoto:async(req,resp)=>{
        let blogid=mongoose.Types.ObjectId(req.query.blogid)
        let pictureid=mongoose.Types.ObjectId(req.query.id)
        if(req.filename==undefined){
            return resp.redirect('/allBlogs')
        }
        await blog.findOneAndUpdate({
            "_id":blogid,
            "image._id":pictureid
        },{$set:{
            "image.$":{
                "image":req.filename
            }
        }
    },(error,items)=>{
        resp.redirect('/allBlogs')
    }
    )
    }
}
export default{updateblogphoto}