// ❗️ 一、实际开发中只有进行类型推导时，可能会自动推导出来 never 类型，但是很少使用它

// 1. 使用 never 类型的场景： 1. 死循环；  2. 抛出异常
function foo(): never {
    // while(true) {

    // }

    throw new Error('123')
}

// 解析歌词
function parseLyric() {
    return []
}

// ❗️ 二、封装框架/工具库的时候可以使用一下 never
/**
 * 在拓展工具的时候，对于一些没有处理的 case，可以直接报错
 * 下面的代码就是如此：可能参数类型本身只有 string ｜ number ，但是有的同事传了 boolean 类型，但是报错了，然后把该功能函数的参数类型加上了 boolean,
 * 但是 switch 没有对 boolean 处理的逻辑，所以在没有 const check: never = message 这个代码的时候就不会报错，漏掉一种判断情况
 * 加上 const check: never = message 这句代码后，可以报错，提醒开发人员，加上一种 case 判断
 */

function handleMessage(message: string | number | boolean) {
    switch(typeof message) {
        case 'string':
            console.log(message.length)
            break;
        case 'number':
            console.log(message)
            break;
        default:
            const check: never = message
    }
}

handleMessage(11111)
handleMessage('aaaaaaa')
handleMessage(true)

export {}