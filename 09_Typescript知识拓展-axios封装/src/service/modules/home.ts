import hyrequest from "../index";

interface IHomeData {
    data: any,
    returnCode: string,
    success: boolean
}

hyrequest.request<IHomeData>({
    url: '/home/multidata'
}).then(res => {
    console.log('res', res)
}) 

hyrequest.get<IHomeData>({
    url: '/home/multidata'
})