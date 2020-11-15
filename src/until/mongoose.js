// file  này là công cụ sử lý dữ liệu trong database
// chúng ta sẽ viết 2 hàm 1 hàm sử lý cho cả danh sách khóa hoc và 1 hàm sử lý cho từng khóa học 
module.exports ={
    multipleMongooseToObject : function(mongooseArrays){// hàm xử lý cho danh sách khóa học 
        return mongooseArrays.map(mongooseArray=>mongooseArray.toObject());
    },
    // hàm sử lý một khóa học 
    mongooseToObject : function(mongoose){
        return mongoose ? mongoose.toObject() : mongoose;
    }
};
