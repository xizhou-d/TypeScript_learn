import { sum } from './utils/math'
import axios from 'axios'
import React from 'react'
import _ from 'lodash'
import ShiHao from './img/shihao.jpeg'
import App from './vue/App.vue'

const message: string = 'Hello world.'
console.log('message', message)

console.log('sum', sum(10, 20))


// lib.dom.d.ts
const h2El = document.createElement('h2')
h2El.textContent = 'Hello Typescript.'
document.body.append(h2El)

// lib.es2015.d.ts
const promise1 = new Promise((resolve, reject) => {
    resolve(123456)
})



// lodash
_.join(['aaa', 'bbb', 'ccc'])

// 给自己的代码添加类型声明文件
// 平时使用的代码中用到的类型，直接在当前位置进行定义或者在业务文件夹某一个位置编写一个类型文件即可
const id: IDType = 123 

// 在 TS 中，如果在全局定义了几个变量，这里是访问不了的，需要在 .d.ts 文件中声明类型, declare
console.log(xizhouName, xizhouAge, xizhouHeight)
foo('aaaa')

const p = new Person('zhou', 8)


// 图片文件的使用
const imgEl = document.createElement('img')
imgEl.src = ShiHao
document.body.append(imgEl)

// jquery
$.ajax({
    url: 'xxdx'
})
