let name: unknown = 'xizhou'

name = 123
// 在 unkonw 类型上做任何操作都是非法的
// console.log(name.length)

// 类型缩小的情况下才可以进行操作,要求必须进行类型校验（类型缩小），才能根据缩小之后的类型，进行对应的操作
if (typeof name === 'string') {
    console.log(name.length)
}

export {}