
type IKun = {
    name?: string
    age?: number
    slogen: string
}

// 自定义 Record
// 1. Keys 必须是联合类型
// 2. keyof any 在 TS 中必然会返回 number | string | symbol


type MyRecord<Keys extends keyof any, T> = {
    [p in Keys]: T
}

type KeyType = 'shanghai' | 'beijing' | 'luoyang'
type IKunReadOnly = Record<KeyType, IKun>

export {}