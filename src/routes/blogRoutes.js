import express from "express";
import {
  getAllBlogs,
  getBlogByID,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";
const router = express.Router();

// http://localhost:4000/api/v1/blogs => get all, create

router.route("/").get(getAllBlogs).post(createBlog);

// http://localhost:4000/api/v1/blogs/id => get by id, update, delete

router.route("/:id").get(getBlogByID).put(updateBlog).delete(deleteBlog);

export const blogRoutes = router;
