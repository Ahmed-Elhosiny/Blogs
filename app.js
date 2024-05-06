const express = require('express');
const morgan = require('morgan');
const blogRouter = require('./routes/blogRoutes');
const app = express();

// MIDDLEWARES & STATIC FILES
app.use(morgan('dev'));
app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

//Routers
app.use('/blogs', blogRouter);

//404
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404',
  });
});

module.exports = app;
