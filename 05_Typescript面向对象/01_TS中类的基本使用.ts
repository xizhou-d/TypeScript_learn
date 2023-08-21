class Person {
    // 成员属性：必须声明成员属性
    name = ''
    age = 0
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    eating() {
        console.log(this.name)
    }
}

// 实例对象 instance
const p1: Person = new Person('xizhou', 18)
const p2: Person = new Person('dongzhou', 19)

export {}