import { Blog } from "../models/blogModel.js";

export const getAll = async () => {
  const blogs = await Blog.find();
  return blogs;
};

export const getByID = async (id) => {
  const blog = await Blog.findById(id);
  return blog;
};

export const create = async (body) => {
  const newBlog = await Blog.create(body);
  return newBlog;
};

export const update = async (id, body) => {
  const updateBlog = await Blog.findByIdAndUpdate(id, body, {
    new: true,
  });
  return updateBlog;
};

export const deleteItem = async (id) => {
  const deleteBlog = await Blog.findByIdAndDelete(id);
  return deleteBlog;
};
