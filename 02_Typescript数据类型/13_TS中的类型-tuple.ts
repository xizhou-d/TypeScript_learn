// 保存我的个人信息： xizhou  29  188

// 1. 数组类型
// 不合适，数组里面最好存放相同的数据类型
const info1: any[] = ['xizhou', 19, 188]
// 不合适，获取值之后也不能明确的知道对应的数据类型
const age = info1[1]



// 2. 对象类型(最多)
const info2 = {
    name: 'xizhou',
    age: 18,
    height: 188
}


// 3. 使用元组类型
//  ⚠️ 元组数据结构中可以存放不同的数据类型，取出来的 item 也有明确的类型
const info3: [string, number, number] = ['why', 18, 188]
const age3 = info3[2]

export {}


// ‼️ 在函数中使用 元组 是最多的（函数的返回值）
function useState(initialState: any): [number, (newValue: number) => void] {
    let stateValue = initialState
    function setValue(newValue: number) {
        stateValue = newValue
    }

    return [stateValue, setValue]
}
const [count, setCount] = useState(0)
setCount(100)
count(100)