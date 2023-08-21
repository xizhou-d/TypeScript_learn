// 定义对象类型
type IPerson = {
    // 可选属性
    name?: string
    // readonly： 只读属性
    age: number
}

interface IKun {
    name: string
    slogen: string
}

const p: Person = {
    // name: 'xizhou',
    age: 19
}

p.age = 90

export {}