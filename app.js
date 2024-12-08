import express from "express";

const app = express();

// blog list

const blogs = [
  {
    id: "0001",
    tilte: "first blog",
    author: "mr. a",
    cover: "image/123",
  },
  {
    id: "0002",
    tilte: "first blog",
    author: "mr. a",
    cover: "image/123",
  },
  {
    id: "0003",
    tilte: "first blog",
    author: "mr. a",
    cover: "image/123",
  },
];

app.get("/blogs", (req, res) => {
  res.json({ blogs });
});

app.listen(4000, () =>
  console.log("Server start on port: http://localhost:4000")
);
