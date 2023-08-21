// 交叉类型：两种（多种）类型同时满足
// type newType = number & string

// 交叉类型的使用
interface IKun {
    name: string
    age: number
}

interface ICoder {
    name: string
    coding: () => void
}


type newType = IKun & ICoder
const info: newType = {
    name: 'xizhou',
    age: 88,
    coding: function() {
        console.log('code')
    }
}

export {}