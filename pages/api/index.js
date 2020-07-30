// 请求接口
import axios from "axios";

// 设置默认访问路径
axios.defaults.baseURL = "https://api.fsn365.com"

// 请求拦截 响应拦截 Interceptors 拦截器
axios.interceptors.response.use((res) => {
    return res.data
}, (err) => {
    Promise.reject(err)
})

// 获取最新的交易和区块信息数据
export let getStats = () => {
    return axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        url: '/stats',
    })

}


// 获取统计信息
export let getLatest = () => {
    return axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        url: '/latest',
    })

}

// 获取Blocks 数据
export let getBlocks = () => {
    return axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        url: '/blocks',
    })

}

// 


export let addressList = () => {
    return axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        url: '/address',
    })

}

// transactionsList


export let transactionsList = () => {
    return axios({
        method: 'get',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        url: '/txn',
    })

}