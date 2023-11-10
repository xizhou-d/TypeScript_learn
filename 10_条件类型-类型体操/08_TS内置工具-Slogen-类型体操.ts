
type IKun = {
    name?: string
    age?: number
    slogen: string
}

// 自定义 Record
// 1. Keys 必须是联合类型
// 2. keyof any 在 TS 中必然会返回 number | string | symbol


/**
 * keyof T 会返回一个联合类型
 * extends 有限制类型的作用
 * K extends keyof T    =>      K extends keyof 'number' | 'string' | 'symbol
 * K 可以是 从 'number' | 'string' | 'symbol 三种类型任意组合起来的类型，但是不能存在这三种类型之外的类型
 */
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type KeyType = 'shanghai' | 'beijing' | 'luoyang'
type IKunPick = Pick<IKun, "name"|"age">

export {}