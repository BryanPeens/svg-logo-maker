const Circle  = require('../Circle');
const Triangle  = require('../Triangle');
const Square  = require('../Square');

// Circle
describe("Circle", () => {
    test('renders right', () => {
        const shape = new Circle();
        var color = "blue";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);
    });
});

// Triangle
describe("Triangle", () => {
    test('renders right', () => {
        const shape = new Triangle();
        var color = "purple";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150,10 250,150 50,150" fill="${color}" />`);
    });
});

// Square
describe("Square", () => {
    test('renders right', () => {
        const shape = new Square();
        var color = "red";
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect width="160" height="160" x="70" y="20" fill="${color}" />`);
    });
});
