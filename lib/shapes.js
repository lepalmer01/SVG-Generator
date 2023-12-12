class Shape {
    constructor() {
        this.color = ""
    }
    setColor(color) {
        this.color = color
    }
}

class Triangle extends Shape {
    render(){
        return `<polygon points="150,10 40,198 260,198" fill="${this.color}" />`
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="50%" cy="50%" r="50%" fill="${this.color}" />`
    }
}

class Square extends Shape {
    render() {
        return `<rect x="25%" y="25%" width="50%" height="50%" fill="${this.color}" />`
    }
}

module.exports = { Triangle, Circle, Square}