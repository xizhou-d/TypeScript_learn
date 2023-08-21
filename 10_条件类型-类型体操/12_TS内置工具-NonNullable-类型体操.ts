 
type UnionType = string | number | null | undefined
// 自定义 Record
// 1. Keys 必须是联合类型
// 2. keyof any 在 TS 中必然会返回 number | string | symbol


type MyNonNullable<T> = T extends null | undefined ? never : T

type IKunNonNullable = NonNullable<UnionType>

type IKunNonNullable1 = MyNonNullable<UnionType>

export {}