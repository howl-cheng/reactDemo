import React, { Component } from 'react'
import axios from 'axios'
export default class Proxy extends Component {
    componentDidMount () {
        // 可以在这里进行异步请求
        // axios.get("https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8898832",{
        //     headers:{
        //         'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15894678874376571676907"}',
        //         'X-Host': 'mall.film-ticket.film.list'
        //     }
        // }).then(res=>{
        //     console.log(res)
        // })
        axios.get('http://47.96.0.211:9000/db/in_theaters?limit=8&page=2"').then(res=>{
            console.log(res)
        })
    }
    render() {
        return (
            <div>
                Proxy
            </div>
        )
    }
}