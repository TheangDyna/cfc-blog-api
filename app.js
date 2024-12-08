// Import Express
import express from "express";
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const blogs = [
  {
    id: "001",
    title: "My blogs",
  },
  {
    id: "002",
    title: "My blogs 02",
  },
  {
    id: "003",
    title: "My blogs 03",
  },
];

app.get("/blogs", (req, res) => {
  res.json({
    status: "success",
    result: blogs.length,
    blogs,
  });
});

// handle undefind route
app.get("*", (req, res) => {
  res.send(
    `<div
      style="
        margin: auto;
        width: max-content;
        textAlign: center;
        color: #ff6b6b;
      "
    >
      <h1>This ${req.url} route is not defined 🚧</h1>
    </div>`
  );
});

// Start the server
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
