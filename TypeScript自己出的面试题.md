## 1. TS 中声明一个变量没有给标识符，会怎么推导出来类型？
-   声明一个标识符时，如果直接进行赋值，会根据赋值的类型推导出标识符的类型注解，let 进行类型推导，推导出来的是通用类型，const 进行类型推导，推导出来的是字面量类型：1.88就是一个类型，是字面量类型

## 2. TS 中函数的如果参数如果没有设置类型，那么参数的类型是什么？函数返回值没有设置类型，那么返回值是什么类型？
-   函数的参数没有明确的指定类型，那么推导出来的类型是 any；在定义一个 typescript 函数时，都要明确的指定参数的类型, 因为，函数的参数没有明确的指定类型，那么推导出来的类型是 any；返回值类型可以明确的指定，也可以自动进行类型推导

## 3. 匿名函数参数类型是什么？需要指定类型吗？
-  匿名函数是否需要添加类型注解：最好不要加类型注解
     当一个函数出现在TypeScript可以确定该函数会被如何调用的地方时;
     该函数的参数会自动指定类型;

    ```javascript
        const names = ['abc', 'cba', 'nba']

        names.forEach(function(item, index, arr) {
            console.log(item, index, arr)
        })
    ```
    
    ◼ 我们并没有指定item的类型，但是item是一个string类型:
         这是因为TypeScript会根据forEach函数的类型以及数组的类型推断出item的类型;
         这个过程称之为上下文类型(contextual typing)，因为函数执行的上下文可以帮助确定参数和返回值的类型;
## 4. any 类型有什么特点？
-   any 类型表示不限制标识符的任意类型，并且可以在该标识符上面进行任何操作(在 Typescript中回到 javascript)

## 5. unknow 类型有什么特点？
-   在 unkonw 类型上做任何操作都是非法的
    ```javascript
        let name: unknown = 'xizhou'

        name = 123
        // 在 unkonw 类型上做任何操作都是非法的
        // console.log(name.length)

        // 类型缩小的情况下才可以进行操作,要求必须进行类型校验（类型缩小），才能根据缩小之后的类型，进行对应的操作
        if (typeof name === 'string') {
            console.log(name.length)
        }

        export {}
    ```