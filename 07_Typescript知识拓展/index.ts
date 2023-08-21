import { sum } from './utils/math'
// 导入的是类型，推荐在类型的前边加上 type 前缀，来表明导入的是类型
// import { type IDType, type IPerson } from './utils/type'
// import type { IDType, IPerson } from './utils/type'
import { price, date } from './utils/format'



console.log(sum(10, 20))

const d1: IDType = 111




// 使用命名空间中的内容
price.format()

document