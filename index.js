const fs = require('fs')
const inquirer = require('inquirer')
const {Triangle, Circle, Square} = require('./lib/shapes')
const SVGGenerator = require('./lib/logo')

function generateLogo() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the text:',
            validate: input => input.length <= 3 || "Text cannot be more than 3 characters"
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['circle', 'triangle', 'square'],
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
        },
    ])
    .then(({ text, textColor, shape, shapeColor }) => {
        let shapeType;

        switch (shape) {
            case 'circle':
                shapeType = new Circle;
                break;
            case 'triangle':
                shapeType = new Triangle;
                break;
            default:
                shapeType = new Square
                break;
            }

            shapeType.setColor(shapeColor)

            const logo = new SVGGenerator();
            logo.setText(text, textColor)
            logo.setShape(shapeType)

            fs.writeFileSync('./examples/logo.svg', logo.render());
            console.log('Generated logo.svg')
       })
    }
    
    generateLogo();


