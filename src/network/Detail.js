import axios from 'axios'

//处理响应拦截
axios.interceptors.response.use(res => {
    return res.data
})

export function getGoodsDetail(id) {
    return axios.get('http://127.0.0.1:6060/goodsDetail', { params: { id } })
}

export function getRecommendList(idArr) {
    return axios.post('http://127.0.0.1:6060/goodsDetail/recommend', { idArr })
}

export class Goods {
    constructor(item) {
        this.name = item.name
        this.price = item.price
        this.sales = item.sales
        this.favorites = item.favorites
        this.discount = item.discount
        this.coloList = item.parameter[1].value
        this.sizeList = item.parameter[0].value
        this.attributes = item.attributes
    }
}