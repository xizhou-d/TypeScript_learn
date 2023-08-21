import { hyrequest1 } from "../index";

hyrequest1.request({
    url: '/entire/list',
    params: {
        offset: 0,
        size: 20
    }
}).then(res => {
    console.log('entire:data', res)
})

interface IHighScoreData {
    list: any[],
    subtitle: string,
    title: string
    type: string,
    _id: string
}

hyrequest1.request<IHighScoreData>({
    url: '/home/highscore',
    interceptors: {
        requestSuccessFn: (config) => {
            console.log("/home/highscore 请求成功的拦截")
            return config
        },
        responseSuccessFn: (res) => {
            console.log('/home/highscore 响应成功的拦截', res)
            return res
        }
    }
}).then(res => {
    console.log(res._id, res.list, res.subtitle)
})