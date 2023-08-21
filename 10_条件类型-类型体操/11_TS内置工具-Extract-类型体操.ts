 
type IKun = "sing" | "dance" | "rap"

// 自定义 Record
// 1. Keys 必须是联合类型
// 2. keyof any 在 TS 中必然会返回 number | string | symbol


type MyExtract<T, E> = T extends E ? T : never

type KeyType = 'shanghai' | 'beijing' | 'luoyang'
type IKunPick = Extract<IKun, "sing">

export {}