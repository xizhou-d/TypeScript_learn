interface IPerson {
    name: string
    age: number
    friends?: {
        name: string
    }
}

const info: IPerson = {
    name: 'xizhou',
    age: 19,
}

// 访问：可选链 ?.
console.log(info?.friends?.name)
// 属性赋值
// info.friends?.name = 'dongzhou'

// 在赋值的时候如果friends不存在位 undefined, 代码会报错，如何解决呢？

// 方案一：类型缩小
if (info.friends) {
    info.friends.name = 'xxxxxx'
}

// 方案二：非空类型断言
// 非空类型断言，这里的 叹号表示 friends不为空，强制 ts 编译器跳过该检测（很危险）
// 只有确保 friends 一定有值，才可以使用，否则会报错
info.friends!.name = 'bbbbbbb'

export {}
