const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');// khi install mongoose-slug-generator mở file này lên 

mongoose.plugin(slug);// khi install mongoose-slug-generator mở file này lên 
const mongooseDelete = require('mongoose-delete'); //3file đồng thời 

const Schema = mongoose.Schema;
const Course = new Schema({
    name:{type:String,required:true,},
    description:{type:String,maxLength: 600},
    image:{type:String,maxLength: 255},
    videoId:{type:String,required:true,},
    level:{type:String,},
    slug: { type: String, slug: 'name',unique:true, }
},{timestamps:true,

});
// Add plugin
// cài npm i mongoose-delete để xóa tạm thời restore hay xóa vĩnh viễn 
mongoose.plugin(slug);//3file đồng thời 
Course.plugin( mongooseDelete,{
    deleteAt: true,// khi xóa nó sẽ lưu lại mềm 
    overrideMethods: 'all', // khi xóa lưu lại bản mềm
});//3file đồng thời 

module.exports =mongoose.model('Course',Course);

