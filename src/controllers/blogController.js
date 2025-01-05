import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
} from "../services/blogService.js";
import { AppError } from "../utils/appError.js";

export const getAllBlogsHandler = async (req, res, next) => {
  try {
    const blogs = await getAllBlogs(req.query);
    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: blogs,
    });
  } catch (error) {
    next(error);
  }
};

export const getBlogByIdHandler = async (req, res, next) => {
  try {
    const blog = await getBlogById(req.params.id);

    // respond with custom class error
    if (!blog) throw new AppError("Document not found", 404);

    res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (error) {
    // Pass unexpected errors to the global error handler
    next(error);
  }
};

export const createBlogHandler = async (req, res, next) => {
  try {
    const createdBlog = await createBlog(req.body);

    res.status(201).json({
      status: "success",
      data: createdBlog,
    });
  } catch (error) {
    next(error);
  }
};

export const updateBlogHandler = async (req, res, next) => {
  try {
    const updatedBlog = await updateBlog(req.params.id, req.body);

    if (!updatedBlog) throw new AppError("Document not found", 404);

    res.status(200).json({
      status: "success",
      data: updatedBlog,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteBlogHandler = async (req, res, next) => {
  try {
    const deletedBlog = await deleteBlog(req.params.id);

    if (!deletedBlog) throw new AppError("Document not found", 404);

    res.status(204);
  } catch (error) {
    next(error);
  }
};
