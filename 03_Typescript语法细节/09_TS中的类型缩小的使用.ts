// 1. typeof  使用的最多
function printID(id: number | string) {
    // typescript 会在这个执行路径里面验证 类型
    if (typeof id === 'string') {
        console.log(id.length)
    }
}




// 平等缩小：一般用来判断字面量类型  ===  !==
type Direction = 'top' | 'bottom' | 'right' | 'left'
function switchDirection(direction: Direction) {
    if (direction === 'top') {
        console.log('向上移动')
    } else if (direction === 'right') {
        console.log('向右移动')
    } else if (direction === 'bottom') {
        console.log('向下移动')
    } else {
        console.log('向左移动')
    }
}




// instanceof
function printDate(date: string | Date) {
    // if (typeof date === 'string') {
    //     console.log(date)
    // } else {
    //     console.log(date.getTime())
    // }
    if (date instanceof Date) {
        console.log(date.getTime())
    }
}

// in 操作符
interface ISwim {
    swim: () => void
}

interface IRun {
    run: () => void
}

function move(animal: ISwim | IRun) {
    if ('swim' in animal) {
        animal.swim()
    } else if ('run' in animal) {
        animal.run()
    }
}

const fish: ISwim = {
    swim: function () {}
}

const dog: IRun = {
    run: function() {}
}

move(fish)
move(dog)