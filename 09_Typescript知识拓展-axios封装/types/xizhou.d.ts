// .d.ts 文件中只会写声明，不会写任何实现的代码
declare module "lodash" {
    export function join(...args: any[]): any[]
}

type IDType = number|string

declare const xizhouName: string
declare const xizhouAge: number
declare const xizhouHeight: number
declare function foo(str: string): string
declare class Person {
    name: string
    age: number

    constructor(public name: string, public age: number) {}
}

// 作为一个第三方库为其他开发者提供类型声明文件：.d.ts

// 声明文件模块
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'

// vue 文件
declare module '*.vue'

// jquery 声明称模块（不合适，是 CDN 引入的）
// 命名空间
declare namespace $ {
    export function ajax(setting: any): any
}