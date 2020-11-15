// file này dùng để tạo các đường dẫn đến các trang ko phải là trang news 
// ví dụ như trang home, search, contact
const {multipleMongooseToObject} = require('../../until/mongoose')
const Course = require('../models/Course');
class SiteController{
    
    index(req,res,next){
       // res.render('home');
        // Course.find({},function(err,courses){
        //     if(!err){
        //         res.json(courses);
        //         return;
        //     }
        //     else{
        //         res.status(400).json({error:'ERROR!!!'});
        //     }
        // })
        Course.find({})
            .then(courses=>{
                
            //    courses = courses.map(course=>course.toObject()); phần này đã được viết sang file mongoose.js của until
                res.render('home',{
                    courses:multipleMongooseToObject(courses)
                });
            })// giờ thay vì trả về toàn bộ dữ liệu thì mình render ra giao diện trang chủ bằng res.render('home)
            // nếu không lỗi thì bảng courses trong database gọi đến function và trả ra toàn bộ dữ liệu 
            //trong bảng bằng res.json(courses);
            .catch(next);// nếu lỗi trả về lỗi là hàm next 
        
     
    }
    search(req,res){
        res.render('search');
    }
}

module.exports = new SiteController();
