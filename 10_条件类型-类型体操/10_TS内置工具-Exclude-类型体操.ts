 
type IKun = "sing" | "dance" | "rap"

// 自定义 Record
// 1. Keys 必须是联合类型
// 2. keyof any 在 TS 中必然会返回 number | string | symbol


type MyExclude<T, E> = T extends E ? never : T 

type KeyType = 'shanghai' | 'beijing' | 'luoyang'
type IKunPick = Exclude<IKun, "sing">

export {}