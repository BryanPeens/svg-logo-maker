  # SVG Generator

  [![Static Badge](https://img.shields.io/badge/License-MIT-yellow)](https://opensource.org/licenses/MIT)
  
  ## Description
  The SVG Generator is a command-line tool designed to create SVG images based on user input. It allows users to specify text content, text color, shape type, and shape color to generate customized SVG images. The project consists of several classes:

  - `Shape`: Represents the basic shape of the SVG image. It has a method `setColor()` to set the color of the shape.
  - `Svg`: Represents the SVG image. It contains methods to set text and shape elements and render the SVG with the specified content.
  - `Circle`, `Triangle`, `Square`: Subclasses of `Shape` representing specific shapes (circle, triangle, square). Each subclass has a `render()` method to generate the SVG code for the respective shape.

  The SVG Generator utilizes the `inquirer` package for user input and `fs` for file system operations.

  ## Installation Instructions
  To install and use the SVG Generator, follow these steps:

  1. Clone or download the project repository from GitHub.
  2. Navigate to the project directory in your command line interface.
  3. Run the following command to install the necessary dependencies:

    $ npm install

  ## Usage Information
  Here's how you can use the SVG Generator:

  1. After installing the application and its dependencies, navigate to the project directory in your command line interface.
  2. Run the application using the following command:

    $ node index.js

  3. Follow the prompts provided by the application. You will be asked to input various details about the SVG image, such as text content, text color, shape type, and shape color.
  4. Once you've provided all the necessary information, the application will generate an SVG file with the specified content and styling.
  5. You can then use the generated SVG image in your projects as needed.

  By following these steps, you can quickly generate custom SVG images tailored to your requirements!

  ## Contribution Guidelines
  If you'd like to contribute to the SVG Generator project, please follow these guidelines:

  1. Fork the Repository: Start by forking the project repository to your GitHub account.
  2. Create a Branch: Make your changes in a new branch to keep them isolated and organized.
  3. Commit Changes: Follow best practices for commit messages and maintain code cleanliness.
  4. Submit Pull Request: After testing your changes, submit a pull request with a clear description of your contributions.

  ## Test Instructions
  This project uses Jest for testing. To run the tests, use the following command:

  $ npm test
