const names = ['abc', 'cba', 'nba']

// 匿名函数是否需要添加类型注解：最好不要加类型注解

//  当一个函数出现在TypeScript可以确定该函数会被如何调用的地方时;
//  该函数的参数会自动指定类型;

// ◼ 我们并没有指定item的类型，但是item是一个string类型:
//   这是因为TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型;
//   这个过程称之为上下文类型(contextual typing)，因为函数执行的上下文可以帮助确定参数和返回值的类型;
names.forEach(function(item, index, arr) {
    console.log(item, index, arr)
})