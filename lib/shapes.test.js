const {Triangle, Circle, Square}= require("./shapes.js")

describe('Validate', () => {
test('should be a triangle', ()=>{
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<polygon points="150,10 40,198 260,198" fill="blue" />');
}),

test('should be a circle', ()=>{
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<circle cx="50%" cy="50%" r="50%" fill="blue" />');
}),

test('should be a square', ()=>{
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual('<rect x="25%" y="25%" width="50%" height="50%" fill="blue" />');
})
   
});