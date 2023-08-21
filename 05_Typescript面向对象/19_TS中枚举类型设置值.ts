// 定义枚举类型
// 枚举类型中的成员是有默认值的，如果不写从 0 开始累加
enum Direction {
    UP = 0,
    DOWN = 1,
    LEFT,
    RIGHT
}

// 累加是从第一个成员的值开始累积，不是从0开始（如果你设置了第一个值的话）
enum Direction1 {
    UP = 100,
    DOWN,
    LEFT,
    RIGHT
}

// 也可以赋值字符串类型，这样就不能累加了，需要依次赋值
enum Direction2 {
    UP = 'up',
    DOWN = 'down',
    LEFT = 'left',
    RIGHT = 'right'
}

// 位移
enum Operation {
    READ = 1 << 0,
    WRITE = 1 << 1,
    foo = 1 << 2
}


const d1: Direction = Direction.LEFT

export {}