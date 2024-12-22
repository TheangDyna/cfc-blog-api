import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
  cover: { type: String, require: true },
  category: { type: String, require: true },
  author: { type: String, require: true },
  title: { type: String, require: true, unique: true },
  description: { type: String },
});

export const Blog = mongoose.model("Blog", blogSchema);
