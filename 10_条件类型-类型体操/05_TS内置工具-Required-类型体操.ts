
type IKun = {
    name?: string
    age?: number
    slogen: string
}

// 自定义 Required
type MyRequired<T> = {
    [K in keyof T]-?: T[K]
}

// 自定义
type IKunRequired = MyRequired<IKun>

type IKunRequired1 = Required<IKun>


export {}