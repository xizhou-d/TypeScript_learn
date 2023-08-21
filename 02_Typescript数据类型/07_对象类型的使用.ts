// 1. 对象类型
// const info: {
//     name: string,
//     age: number
// } = {
//     name: 'xizhou',
//     age: 20
// }

// 2. 对象类型和函数类型结合使用
// 🇨🇳：定义对象的类型注解的时候，里面的属性可以用逗号或者分号分割（写多行也可以都省略）
type PointType = {
    x: number,
    y: number
    //  可选类型
    z?: number
}
function printCoordinate(point: PointType) {
    console.log('x 坐标：', point.x)
    console.log('y 坐标：', point.y)
} 

printCoordinate({ x: 20, y: 30})