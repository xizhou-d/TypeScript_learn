interface ILength {
    length: number
}

// 1. getLength 没有必要使用泛型
function getLength(arg: ILength) {

}

const info01 = getLength('aaaa')
const info02 = getLength(['aaa', 'bbb', 'ccc'])
const info03 = getLength({ length: 100 })





// 2. 获取传入的内容，这个内容必须有 length 属性
// 如果这里用 ILength 来约束类型，那么 返回值 info1 info2 info3的类型就丢失了
function getInfo(arg: ILength) {
    return arg
}

const info1 = getInfo('aaaaa')
const info2 = getInfo(['aaa', 'bbb', 'ccc'])
const info3 = getInfo({ length: 100 })

// 使用泛型解决类型丢失的问题
// 这种方式进入函数的时候，参数的类型就已经丢失了，只知道是 ILength 类型
function getInfo1<Type>(arg: Type): Type {
    return arg
}

const info4 = getInfo1('aaaaa')
const info5 = getInfo1(['aaa', 'bbb', 'ccc'])
const info6 = getInfo1({ length: 100 })
// 但是此时，传入任何类型都可以，没有 length 属性也可以
const info7 = getInfo1(123333)


// 3. 可以使用继承: Type 相当于是一个变量，用于记录本次调用的类型，所以在整个函数的执行周期内，一只保留着参数的类型
function getInfo2<Type extends ILength>(arg: Type): Type {
    return arg
}

const info8 = getInfo2('aaaaa')
const info9 = getInfo2(['aaa', 'bbb', 'ccc'])
const info10 = getInfo2({ length: 100 })
// 但是此时，传入任何类型都可以，没有 length 属性也可以
const info11 = getInfo2(123333)

export {}