import { Blog } from "../models/blogModel.js";

export const getAll = async () => {
  const blogs = await Blog.find();
  return blogs;
};

export const getByID = async (id) => {
  const blog = await Blog.findById(id);
  return blog;
};
