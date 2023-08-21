class Person {
    //  protected 修饰的是仅在类自身及子类中可见、受保护的属性或方法;
    protected name: string
    age: number

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    } 

    eating() {
        console.log('eating')
        this.running()
    }

    // 私有方法：只有在类内部才能访问
    private running() {
        console.log('running')
    }
}

// const p1 = new Person('xizhou', 19)
// console.log('p1.name', p1.name)
// p1.eating() 
// // 私有方法在外面调用会报错
// p1.running()

class Student extends Person {
    constructor(name: string, age: number) {
        super(name, age)
    }
    studying() {
        console.log('studying', this.name)
    }
}

const s1 = new Student('datang', 89)
// console.log(s1.name)
console.log(s1.age)
s1.studying()