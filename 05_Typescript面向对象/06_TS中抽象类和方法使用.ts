abstract class Shape {
    // getArea 只有声明没有实现体
    // 实现让子类自己实现
    // 抽象方法： 在方法之前加上 abstract, 抽象方法只能出现在抽象类中，因此类的声明之前也要加上 abstract
    abstract getArea(): number
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super()
    }

    getArea() {
        return this.width * this.height
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super()
    }

    getArea() {
        return this.radius ** 2 * Math.PI
    }
}

class Triangle extends Shape {
    // 抽象类里面的抽象方法，子类必须实现
    getArea() {
        return 100
    }
}

// 通用的函数
function calcArea(shape: Shape) {
    return shape.getArea()
}

calcArea(new Rectangle(10, 20))
calcArea(new Circle(10))
calcArea(new Triangle())
// 抽象类是不能实例化的
calcArea(new Shape())


export {}