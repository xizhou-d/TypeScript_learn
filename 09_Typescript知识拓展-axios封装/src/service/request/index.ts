import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { HyRequestConfig } from './type'

// 拦截器：蒙板/token/修改配置

class HyRequest {
    instance: AxiosInstance

    // request 实例 => axios 实例
    constructor(config: HyRequestConfig) {
        this.instance = axios.create(config)

        // 添加请求拦截器
        this.instance.interceptors.request.use((config) => {
            // 在发送请求之前做些什么
            console.log('全局请求拦截')
            return config
        }, (error) => {
            // 对请求错误做些什么
            console.log('全局请求失败拦截')
            return Promise.reject(error)
        })

        // 添加响应拦截器
        this.instance.interceptors.response.use(function (response) {
            // 对响应数据做点什么
            console.log('全局响应成功拦截')
            return response.data;
        }, function (error) {
            // 对响应错误做点什么
            console.log('全局响应失败拦截')
            return Promise.reject(error);
        })

        this.instance.interceptors.request.use(
            config.interceptors?.requestSuccessFn,
            config.interceptors?.requestFailureFn
        )
        this.instance.interceptors.response.use(
            config.interceptors?.responseSuccessFn,
            config.interceptors?.responseFailureFn
        )
    }

    // 封装网络请求的方法
    request<T = any>(config: HyRequestConfig<T>) {
        const newConfig: any = config
        if (config.interceptors?.requestSuccessFn) {
            config = config.interceptors?.requestSuccessFn(config)
        }
        return new Promise<T>((resolve, reject) => {
            this.instance.request<any, T>(config).then(res => {
                if (config.interceptors?.responseSuccessFn) {
                    res = config.interceptors?.responseSuccessFn(res)
                }
                resolve(res) 
            }).catch(error => {
                reject(error)
            })
        })
    }

    get<T = any>(config: HyRequestConfig<T>) {
        this.request({...config, method: 'GET'})
    }

    post<T = any>(config: HyRequestConfig<T>) {
        this.request({...config, method: "POST"})
    }

    delete<T = any>(config: HyRequestConfig<T>) {
        this.request({...config, method: "DELETE"})
    }

    patch<T = any>(config: HyRequestConfig<T>) {
        this.request({...config, method: "PATCH"})
    }
}

export default HyRequest