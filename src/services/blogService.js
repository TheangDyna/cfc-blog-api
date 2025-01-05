import { Blog } from "../models/blogModel.js";
import { APIFeatures } from "../utils/apiFeature.js";

export const getAllBlogs = async (query) => {
  const features = new APIFeatures(Blog.find(), query)
    .filter()
    .sort()
    .select()
    .paginate();

  const blogs = await features.query;
  return blogs;
};

export const getBlogById = async (id) => {
  const blog = await Blog.findById(id);
  return blog;
};

export const createBlog = async (body) => {
  const newBlog = await Blog.create(body);
  return newBlog;
};

export const updateBlog = async (id, body) => {
  const updateBlog = await Blog.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updateBlog;
};

export const deleteBlog = async (id) => {
  const deleteBlog = await Blog.findByIdAndDelete(id);
  return deleteBlog;
};
