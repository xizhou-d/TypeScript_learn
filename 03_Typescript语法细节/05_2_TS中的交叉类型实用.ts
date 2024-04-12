type A = {
    T1: string
}

type B = {
    T2: number
}

type C = {
    T3: boolean
} & B & A

// u 的属性必须包含，A， B C 三者所有的属性
let u: C = {
    T1: 'aaa',
    T2: 888,
    T3: true
}