
type IKun = {
    name?: string
    age?: number
    slogen: string
}

// 自定义 Required
type MyReadOnly<T> = {
    readonly [K in keyof T]-?: T[K]
}

type IKunReadOnly = MyReadOnly<IKun>

type IKunReadOnly1 = Readonly<IKun>


export {}