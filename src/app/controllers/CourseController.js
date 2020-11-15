// file này dùng để tạo các đường dẫn đến các trang ko phải là trang news 
// ví dụ như trang home, search, contact
const {mongooseToObject } = require('../../until/mongoose');
const Course = require('../models/Course');
class CourseController{
    
    show(req,res,next){
        Course.findOne({slug:req.params.slug})
       .then(course=>{
        res.render('courses/show',{course:mongooseToObject(course)});
       })
       .catch(next);
    }
    //[GET] /courses/create
    create(req,res,next){
        res.render('courses/create');
    }
    // [POST] /courses/store
    store(req,res,next){
        const formData = req.body;// dùng với phương thức post
        formData.image= `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(()=>res.redirect('/me/stored/courses'))
            .catch(error=>{

            });
    }
    //[GET]/courses/:id/edit
    edit(req,res,next){
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit', {
            course:mongooseToObject(course)
        }))
        .catch(next);
       
    }

    //[PUT]/courses/:id
    update(req,res,next){
        Course.updateOne({ _id: req.params.id}, req.body)
        .then(()=>res.redirect('/me/stored/courses'))
        .catch(next);
    }
        
    // [DELETE]/courses/:id

    delete(req,res,next){
        Course.delete({_id: req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next);
    }

    // [DELETE]/courses/:id/force xóa vĩnh viễn 
    forceDelete(req,res,next){
        Course.deleteOne({_id: req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next);
    }
    // [RESTORE]/courses/:id khôi phục lại 
    restore(req,res,next){
        Course.restore({_id: req.params.id})
        .then(()=>res.redirect('back'))
        .catch(next);
    }
}

module.exports = new CourseController();