import express from "express";
import {
  getAllBlogsHandler,
  getBlogByIdHandler,
  createBlogHandler,
  updateBlogHandler,
  deleteBlogHandler,
} from "../controllers/blogController.js";
const router = express.Router();

// http://localhost:4000/api/v1/blogs => get all, create

router.route("/").get(getAllBlogsHandler).post(createBlogHandler);

// http://localhost:4000/api/v1/blogs/id => get by id, update, delete

router
  .route("/:id")
  .get(getBlogByIdHandler)
  .put(updateBlogHandler)
  .delete(deleteBlogHandler);

export const blogRoutes = router;
