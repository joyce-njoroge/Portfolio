const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './src/main.jsx', // The entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'), // The output directory
    filename: 'bundle.js', // The name of the output bundle file
  },
  plugins: [
    new Dotenv(), // Load environment variables from .env file
  ],
  // Additional configuration options for loaders, modules, etc.
  module: {
    rules: [
      // Rules for handling different file types (e.g., JavaScript, CSS, etc.)
    ],
  },
};
