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



// 2. 普通函数

function foo() {
    console.log(this)
}

export {}