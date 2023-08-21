const names: string[] = ['abc', 'cba', 'nba ']


/**
 * ❗️ 如果没有明确指定函数返回值是 void，而是由 TS 基于上下文推断出来的函数返回值是 void，那么函数是可以返回值的，并不强制要求不能返回任何东西；
 * ❗️ 如果明确指定函数返回值是 void，那么返回值的话就会报错，是不允许的
 */
names.forEach((item, index, arr) => {
    console.log('item', item)
    return 123
})

// names.forEach((item, index, arr): () => void => {
//     return 123
// })

export {}