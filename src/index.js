const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
//const methodOverride = require('method-override');// dùng để sửa khóa học 
const mysql = require('mysql');
const app = express();
const port = 3000;
const route = require('./routes');// tức là nó đang đi vào folder routes
 const db = require('./config/db');
 db.connect();
 //app.use(methodOverride('_method'));// phương thức chuyển put thành post  dùng để sửa khóa học 
// http logger
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'publics')));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());


//template engine
app.engine('hbs', handlebars({
  extname: '.hbs',// dinh nghĩa lại đuôi cho ngắn lại 
  helpers:{
    sum:(a,b)=>a+b,
  }
}));

     app.set("view engine", 'hbs');

app.set('views', path.join(__dirname,'resources','views'));
// Routes init là phần khởi tạo 
route(app);
// khi bên index.js của routes đã nhận app thì bên này chỉ cần truyền app vào function route là dc và nhấc tất cả các 
//đường dẫn có tên app chứa đường dẫn sang file index.js routes
// ĐỐI VỚI CÁC DANH MỤC CỤ THỂ NHƯ NEWS KHÓA HỌC DANH MỤC THÌ LÀM NHƯ VẬY 
 // CÒN VỚI CÁC TRANG NHƯ HOME SEARCH CONTACT(LIÊN HỆ ) NÓ KHÔNG THUỘC VÀO CỤ THỂ NHƯ TRÊN 
 // thì ta tạo ra 1 file site.js trong routes và 1 file siteController.js trong app/controller 
// app.get('/search',(req,res)=>{
//   res.render('search');
// });
// app.get('/news',(req,res)=>{
//   res.render('news');
// });
// app.get('/',(req,res)=>{
//   res.render('home');
// });
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
