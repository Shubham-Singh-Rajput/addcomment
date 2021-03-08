import { blog } from './../../model/schema/blog';
let afterlogin={

    afterlogin:async(req,resp)=>{
        let publicBlog=await blog.find({private:"public"})
        resp.render("afterlogin.hbs",{
            data:publicBlog
        })
    }
}
export default{afterlogin}