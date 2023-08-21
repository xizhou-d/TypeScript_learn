// 获取 DOM 元素 <img class="img" />
// 使用 类型断言
const imgEl = document.querySelector('.img') as HTMLImageElement

imgEl.src = 'xxx'


// 类型断言的规则: 断言只能断言成更加具体的类型，或者不太具体（any/unknow）的类型
const age1: number = 28
// 错误的做法：
// const age2: number = 28 as string


// ts 检测类型是正确的，但是这个代码本身不太正确
// const age3: number = 28 as any
// const age4 = age3 as string

export {}