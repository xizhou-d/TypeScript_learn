class Person {
    readonly name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const p = new Person('xizhou', 18)
console.log(p.name)
// 只读属性不能进行写入操作
p.name = 'dongzhou'

export {}