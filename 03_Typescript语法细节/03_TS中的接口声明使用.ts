// 用 type 来声明一个对象类型
type PointType = {
    x: number
    y: number
    z?: number
}

// 对象的另一种生命方式就是通过接口来声明： interface
interface PointType2 {
    x: number
    y: number
    z?: number
}

/**
 *  类型别名和接口非常相似，在定义对象类型时，大部分时候，你可以任意选择使用。 
 *  接口的几乎所有特性都可以在 type 中使用
 */
function printCoordinate(point: PointType2) {}

export {}