type IKun = {
    name: string
    age?: number
    slogen: string
}

// 自定义 Partial
type MyPartial<T> = {
    [K in keyof T]?: T[K]
}

type IKunOptinal = Partial<IKun>

export {}
