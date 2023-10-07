# Express Starter Project

I have created this project to gain a fundamental understanding of Express.js. It serves as a beginner's guide to exploring Express.js and its core features. The project includes a basic server setup and routing for managing friends and messages. Whether you're new to Express.js or looking for a simple starting point, this project provides the essential concepts you need to get started.

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Udaay/express-starter.git
   ```

2. Change into the project directory:

   ```bash
   cd express-starter
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Usage

To run the Express.js server, use the following command:

```bash
npm run watch
```

This command starts the server using [Nodemon](https://nodemon.io/) for automatic server restarts when you make changes to the code.

The server will be running at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project has the following structure:

- `server.js`: This is the main server file where Express.js is configured and routes are defined.

- `routes/`: This directory contains route handlers for different parts of the application.
  - `friends.route.js`: Handles routes related to managing friends.
  - `messages.route.js`: Handles routes related to messages.

- `views/`: Contains views for rendering HTML pages.
  - `index.hbs`: The main HTML template for the home page.
  - `layout.hbs`: The layout template that other views extend.
  - `messages.hbs`: A view for displaying messages.

- `public/`: This directory is used to serve static files like stylesheets, images, and JavaScript files.

## Features

- Basic Express.js setup and configuration.
- Middleware for logging request duration.
- Serving static files using `express.static`.
- Rendering dynamic HTML using Handlebars (`hbs`) templates.
- Routing for managing friends and messages.

Feel free to explore the code and modify it to suit your learning needs or use it as a starting point for your own Express.js projects. Enjoy learning Express.js!