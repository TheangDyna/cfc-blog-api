# Express App Setup

This guide explains how to set up and run the provided Express.js application.

## Steps to Run the Application

### 1. Clone or Create the Project

1. Create a directory for your project:
   ```bash
   mkdir express-app
   cd express-app
   ```
2. Inside the directory, create a file named `app.js` and copy the provided code into it.

### 2. Initialize the Project

Run the following command to initialize a new Node.js project:

```bash
npm init -y
```

This will generate a `package.json` file.

### 3. Update `package.json`

Edit the `package.json` file to include the following configuration:

- Add the line `"type": "module"` to enable ES6 module syntax.
- Add a `scripts` section with a `dev` script to run the application:

```json
{
  //...
  "type": "module",
  "scripts": {
    "dev": "node app.js"
  }
  //...
}
```

### 4. Install Dependencies

Install Express.js:

```bash
npm install express
```

### 5. Run the Application

Start the server by running:

```bash
npm run dev
```

### 6. Access the Application

Once the server is running, you can test the endpoints:

- **Home Route**:
  Open [http://localhost:4000/](http://localhost:4000/) to see `Hello, World!`.

- **Blogs Route**:
  Open [http://localhost:4000/blogs](http://localhost:4000/blogs) to view the blogs JSON response.

- **Undefined Route**:
  Open any undefined route like [http://localhost:4000/random](http://localhost:4000/random) to see a custom 404 message.

## Application Features

1. **Home Route (`/`)**:

   - Responds with a `Hello, World!` message.

2. **Blogs Route (`/blogs`)**:

   - Returns a JSON object containing a list of predefined blogs.

3. **Undefined Routes**:
   - Displays a styled message indicating that the route is not defined.

## Example Responses

### `/blogs`

```json
{
  "status": "success",
  "result": 3,
  "blogs": [
    {
      "id": "001",
      "title": "My blogs"
    },
    {
      "id": "002",
      "title": "My blogs 02"
    },
    {
      "id": "003",
      "title": "My blogs 03"
    }
  ]
}
```

### Undefined Route (`/random`)

HTML response:

```html
<div
  style="margin: auto; width: max-content; text-align: center; color: #ff6b6b;"
>
  <h1>This /random route is not defined 🚧</h1>
</div>
```

## Troubleshooting

- If you see an error like `Cannot find module 'express'`, ensure you have run `npm install express`.
- If the server does not start, verify that port 4000 is not already in use.

## Notes

- This application uses ES6 `import` syntax. Ensure you have the appropriate configuration in your environment (e.g., adding `"type": "module"` in `package.json`) or use CommonJS syntax (e.g., `const express = require('express')`).
