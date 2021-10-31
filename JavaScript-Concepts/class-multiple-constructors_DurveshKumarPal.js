// AUTHOR: DURVESH KUMAR PAL
// JavaScript Concept:class-multiple-constructors
// GITHUB: https://github.com/DurveshKumarPal

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    constructor(width) {
        this.width = width;
    }
    // Getter
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

const square = new Rectangle(20, 30);

console.log(square.area); // 600
