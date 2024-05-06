const mongoose = require('mongoose');
const slugify = require('slugify');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'A blog must have a title'],
    },
    snippet: {
      type: String,
      required: [true, 'A blog must have a snippet'],
    },
    body: {
      type: String,
      required: [true, 'A blog must have a body'],
    },
    slug: String,
  },
  {
    // toJSON: { virtuals: true },
    // toObject: { virtuals: true },
    timestamps: true,
  }
);

blogSchema.pre('save', function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;
