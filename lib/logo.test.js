const SVGGenerate= require("./logo")
const {Triangle} =require("./shapes")

test("Should render a 300 by 200 logo", ()=>{
    const result='<svg version="1.1" width="300" height="200"xmlns="http://www.w3.org/2000/svg"></svg>'
    const logo=new SVGGenerate()
    expect(logo.render()).toEqual(result)
})

test("Should append text and text color", ()=>{
    const result='<svg version="1.1" width="300" height="200"xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">ABC</text></svg>'
    const logo=new SVGGenerate()
    logo.setText("ABC", "green")
    expect(logo.render()).toEqual(result)
})

test("should throw error if text has more than 3 characters", ()=>{
    const err="Text cannot be more than 3 characters"
    const logo=new SVGGenerate()
    expect(()=>logo.setText("ABCD", "green")).toThrow(err)
})

test("Should append text and text color", ()=>{
    const result='<svg version="1.1" width="300" height="200"xmlns="http://www.w3.org/2000/svg"><polygon points="150,10 40,198 260,198" fill="pink" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="green">ABC</text></svg>'
    const logo=new SVGGenerate()
    logo.setText("ABC", "green")
    const triangle= new Triangle()
    triangle.setColor("pink")
    logo.setShape(triangle)
    expect(logo.render()).toEqual(result)
})