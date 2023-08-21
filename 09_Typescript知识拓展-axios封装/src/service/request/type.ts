import type { InternalAxiosRequestConfig, AxiosRequestConfig, AxiosResponse } from 'axios'

// 针对 AxiosRequestConfig 进行拓展
export interface IInterceptors<T> {
    requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
    requestFailureFn?: (err: any) => any
    responseSuccessFn?: (res: T) => T
    responseFailureFn?: (err: any) => any
}
export interface HyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: IInterceptors<T>
}
