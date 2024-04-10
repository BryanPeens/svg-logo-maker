// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const Svg = require('./lib/svg');
const Circle = require('./lib/Circle');
const Triangle = require('./lib/Triangle');
const Square = require('./lib/Square');

// TODO: Create an array of questions for user input
const questions = [
    // Three Characters
    {
        type: "input",
        name: "text",
        message: "Please enter three characters:",
    },
    // Text Color
    {
        type: "input",
        name: "textColor",
        message: "Enter a color keyword (red), or a hexadecimal number for text:",
    },
    // Shape
    {
        type: "list",
        name: "shape",
        message: "Please choose your shape:",
        choices: [
            "circle",
            "triangle",
            "square",
        ],
    },
    // Shape Color
    {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword (red), or a hexadecimal number for shape:",
    },
];

// function to write SVG file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log("There was an error:", err);
        } else {
            console.log("Generated logo.svg.");
        }
    });
}

// function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const { text, textColor, shape, shapeColor } = answers;

        const svg = new Svg();
        svg.setTextEl(text, textColor);

        let shapeObj;
        switch (shape) {
            case "circle":
                shapeObj = new Circle();
                break;
            case "triangle":
                shapeObj = new Triangle();
                break;
            case "square":
                shapeObj = new Square();
                break;
            default:
                throw new Error("Invalid shape selected");
        }
        shapeObj.setColor(shapeColor);
        svg.setShapeEl(shapeObj);

        writeToFile('logo.svg', svg.render());
    });
}

// Function call to initialize app
init();
