// 2. 如果返回值类型是 void 类型，那么我们也可以返回 undefined(TS编译器允许这种操作)
function sum(num1: number, num2: number): void {
    // return num1 + num2
    return undefined
    // console.log(num1 + num2)
}

// 应用场景
type LyricInfoType = {
    time: number
    text: string
}
// parseLyric 函数的数据类型：(lyric: string) => LyricInfoType[]
function parseLyric(lyric: string): LyricInfoType[] {
    const lyricInfos: LyricInfoType[] = []

    return lyricInfos
}


// foo 作为函数名，也是一个标识符也有自己的类型，没有明确指定，会有一个推导类型
// foo的类型注解：foo: () => void
type FooType = () => void
// const foo: () => void = () => {}
const foo: FooType = () => {}




// 举个例子
// 函数的参数的类型需要明确指定类型，否则推导出来的类型是 any 类型
type ExecFn = (...args: any[]) => void
function delayFn(fn: ExecFn) {
    setTimeout(() => {
        fn('xizhou', 19)
    }, 1000)
}
// delayFn(123)  // error: Argument of type 'number' is not assignable to parameter of type '() => void'.
delayFn((name, age) => {
    console.log(name, age)
})


export {}