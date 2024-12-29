import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  cover: { type: String, required: true },
  category: { type: String, required: true },
  author: { type: String, required: true },
  title: { type: String, required: true, unique: true },
  description: { type: String },
});

export const Blog = mongoose.model("Blog", blogSchema);
