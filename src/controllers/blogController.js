import { getAll, getByID } from "../services/blogService.js";

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await getAll();
    res.status(200).json({
      status: "success",
      results: blogs.length,
      data: blogs,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
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

    res.status(500).json({ error: error.message });
  }
};
