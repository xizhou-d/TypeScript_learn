class Person {

}

class Dog {

}

// 类型体操
type HyInstanceType<T extends new (...arg: any[]) => any> = T extends new (...arg: any[]) => infer R ? R : never

const p1: Person  = new Person()

type HyPerson = Person

// typeof Person: 构造函数具体的类型
// InstanceType: 构造函数创建出来的实例对象的类型
type HyPerson1 = InstanceType<typeof Person>
const p2: HyPerson = new Person()

// 构造函数的例子
// 通常会用于创建实例的工具函数时会用到这个
function factory<T extends new (...arg: any[]) => any>(ctor: T): InstanceType<T> {
    return new ctor()
}

const p3 = factory(Person) 
const d = factory(Dog)






export {}