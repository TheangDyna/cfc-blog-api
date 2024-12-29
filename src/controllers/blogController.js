import {
  getAll,
  getByID,
  create,
  update,
  deleteItem,
} from "../services/blogService.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await getAll();
    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: blogs,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getBlogByID = async (req, res) => {
  try {
    const blog = await getByID(req.params.id);

    if (!blog) {
      return res.status(404).json({
        status: "fail",
        message: "Document not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: blog,
    });
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({
        status: "fail",
        message: "Invalid ID format",
      });
    }

    res.status(500).json({ message: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const newBlog = await create(req.body);

    res.status(201).json({
      status: "success",
      data: newBlog,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const updateBlog = await update(req.params.id, req.body);

    if (!updateBlog) {
      return res.status(404).json({
        status: "fail",
        message: "Document not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: updateBlog,
    });
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({
        status: "fail",
        message: "Invalid ID format",
      });
    }

    res.status(500).json({ message: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const deleteBlog = await deleteItem(req.params.id);

    if (!deleteBlog) {
      return res.status(404).json({
        status: "fail",
        message: "Document not found",
      });
    }

    res.status(204);
  } catch (error) {
    if (error.name === "CastError" && error.kind === "ObjectId") {
      return res.status(400).json({
        status: "fail",
        message: "Invalid ID format",
      });
    }

    res.status(500).json({ message: error.message });
  }
};
