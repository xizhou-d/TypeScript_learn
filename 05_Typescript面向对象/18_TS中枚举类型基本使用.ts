// 定义枚举类型
enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

const d1: Direction = Direction.UP
console.log(d1)

function trunDirection(direction: Direction) {
    switch (direction) {
        case Direction.UP:
            console.log('向上移动一个格子')
            break
        case Direction.DOWN:
            console.log('向下移动一个格子')
            break
        case Direction.LEFT:
            console.log('向左移动一个格子')
            break
        case Direction.RIGHT:
            console.log('向右移动一个格子')
            break
        default:
            const myDirection: never = direction
    }
}

// 监听键盘的点击
trunDirection(Direction.LEFT)

export {}