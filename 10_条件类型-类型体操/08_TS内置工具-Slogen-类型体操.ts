
type IKun = {
    name?: string
    age?: number
    slogen: string
}

// 自定义 Record
// 1. Keys 必须是联合类型
// 2. keyof any 在 TS 中必然会返回 number | string | symbol


type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
}

type KeyType = 'shanghai' | 'beijing' | 'luoyang'
type IKunPick = Pick<IKun, "name"|"age">

export {}