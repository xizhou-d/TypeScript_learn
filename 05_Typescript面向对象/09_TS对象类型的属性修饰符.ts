// 定义对象类型
type IPerson = {
    // 可选属性
    name?: string
    // readonly： 只读属性
    readonly age: number
}

interface IKun {
    name: string
    readonly slogen: string
}

const p: IPerson = {
    name: 'xizhou',
    age: 19
}

p.age = 90

export {}