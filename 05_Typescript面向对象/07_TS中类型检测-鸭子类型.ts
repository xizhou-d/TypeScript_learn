// Typescript 对类型进行检测的时候使用的是鸭子类型
// 鸭子类型：如果一只鸟走起来像鸭子，游起来像鸭子，看起来像鸭子，那么你可以认为它就是一只鸭子
// 鸭子类型：只关心属性和行为，不关心你具体是不是对应的类型

class Person {
    constructor(public name: string, public age: number) {

    }

    running() {
        console.log(1)
    }
}

class Dog {
    constructor(public name: string, public age: number) {}
    running() {
        console.log(2)
    }
}

function printPerson(p: Person) {
    console.log(p.name)
    console.log(p.age)
}

printPerson(new Person('xizhou', 18))
printPerson('abc')
printPerson({})
printPerson({ name: 'dongzhou', age: 19, running: function() {
    console.log(3)
}})
printPerson(new Dog('wangcai', 1))

const p: Person = new Dog('shenzhen', 1)

export {}