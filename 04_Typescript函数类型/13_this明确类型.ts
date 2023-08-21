/**在没有对 TS 进行特殊配制的情况下，this 是 any 类型  */
// 1. 对象中的函数中的 this
const obj = {
    name: 'xizhou',
    studying: function() {
        // 默认情况下，this 是 any 类型
        console.log(this.name)
    }
}

obj.studying()



// 2. 普通函数指定 this 类型，需要第一个参数传递 this，剩余的参数在 this 后面

function foo(this: { name: string }, info: {name: string}) {
    console.log(this, info)
}

foo.call({ name: 'xizhou' }, { name: 'dongzhou' })

export {}