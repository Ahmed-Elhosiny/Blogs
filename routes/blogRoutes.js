const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();

router
  .route('/')
  .get(blogController.getAllBlogs)
  .post(blogController.createBlog);

router.route('/create').get(blogController.createPage);
router.route('/about').get(blogController.aboutPage);

router
  .route('/:id')
  .get(blogController.getSingleBlog)
  .delete(blogController.deleteBlog);

module.exports = router;
