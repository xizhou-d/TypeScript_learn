// 如果每一个类都要写一遍类的成员修饰符，会很麻烦，可以通过在构造函数参数前添加一个可见性修饰符 public private protected 或者 readonly 来创建参数属性，最后这些类 属性字段也会得到这些修饰符;

class Person {

    constructor(public name: string, private age: number, readonly height: number) {
        
    }
}

const p = new Person('xizhou', 18, 188)
p.number
p.name

export {}