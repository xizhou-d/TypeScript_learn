// 需求：只能将两个数字/两个字符串相加
// 案例分析：any 类型
function sum(arg1, arg2) {
    return arg1 + arg2
}

sum(10, 20)
sum('abc', 'cba')




// 1. 实现两个函数
function sum1(arg1: number, arg2: number) {
    return arg1 + arg2
}

function sum2(arg1: string, arg2: string) {
    return arg1 + arg2
}

// 逻辑完全一样，但是因为不同的类型，需要定义两个函数，如果是上百行的代码呢？
sum1(10, 20)
sum2('abc', 'cba')





// 2. 错误的做法
function sum3(arg1: number | string, arg2: number | string) {
    // + 运算符不能用于联合类型的运算
    return arg1 + arg2
}




// 3. typescript 中函数的重载写法
// 3.1 先编写重载签名
function sum4(arg1: number, arg2: number): number
function sum4(arg1: string, arg2: string): string

// 3.2 再编写一个通用函数
function sum4(arg1: any, arg2: any): any  {
    return arg1 + arg2
}

sum4(10, 20)
sum4({ name: 'xizhou' }, 20)
sum4('abc', 111)

export {}

