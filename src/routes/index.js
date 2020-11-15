const newsRouter = require('./news');
const meRouter = require('./me');
const coursesRouter = require('./courses');
const siteRouter = require('./site');
function route(app){

    app.use('/news',newsRouter);
    app.use('/me',meRouter);
    app.use('/courses',coursesRouter);
    app.use('/',siteRouter);
    // app.get('/search',(req,res)=>{
    //     res.render('search');
    // });
    // app.get('/news',(req,res)=>{//bỏ
    //     res.render('news');
    // })
    // app.get('/',(req,res)=>{
    //     res.render('home');
    // });
}
module.exports =route;// sau khi tách các file ra cần exports file đó 
