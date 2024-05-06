const Blog = require('../models/blog');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.render('blogs/index', {
      title: 'All Blogs',
      blogs,
    });
  } catch (err) {
    res.status(404).render('404');
  }
};
const getSingleBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.render('blogs/details', { blog, title: 'Blog Details' });
  } catch (err) {
    res.status(404).render('404', { title: 'Blog not found' });
  }
};
const createBlog = async (req, res) => {
  try {
    await Blog.create(req.body);
    res.redirect('blogs');
  } catch (err) {
    res.render('404', { title: "Can't create new blog" });
  }
};
const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({
      redirect: '/blogs',
    });
  } catch (err) {
    res.json({
      redirect: '/blogs',
    });
  }
};
const createPage = (req, res) => {
  res.render('blogs/create', {
    title: 'Creat a new blog',
  });
};
const aboutPage = (req, res) => {
  res.render('about', {
    title: 'About',
  });
};
module.exports = {
  getAllBlogs,
  getSingleBlog,
  createBlog,
  deleteBlog,
  createPage,
  aboutPage,
};
