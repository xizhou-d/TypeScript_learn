// Typescript 提供了映射类型：可以看作是一个函数，将其他接口的类型复制过来
// 映射类型不能使用 interface 来定义
// Type: IPerson
// keyof = "name"|"age"
type MapPerson<Type> = {
    // [index: number]: string
    // 索引类型一次进行使用
    [Property in keyof Type]: Type[Property]
}

interface IPerson {
    name: string
    age: number
}

// 有的时候，一个类型需要基于另外一个类型，但是你又不想拷贝一份，这个时候可以考虑使用映射类型。

// 1. 拷贝一份
interface INewPerson {
    name: string
    age: number
}

// 2. 使用映射
type INewPerson1 = MapPerson<IPerson>

export {}