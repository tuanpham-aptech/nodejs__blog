const express = require('express');
const router = express.Router();
const courseController =require('../app/controllers/CourseController');
router.get('/create',courseController.create);
router.post('/store',courseController.store);//thêm 
router.get('/:slug',courseController.show);
router.get('/:id/edit',courseController.edit);
router.put('/:id',courseController.update);//sửa
router.patch('/:id/restore',courseController.restore);// khôi phục sau xóa  
router.delete('/:id',courseController.delete);
router.delete('/:id/force',courseController.forceDelete);// xóa vĩnh viễn 


module.exports = router;
