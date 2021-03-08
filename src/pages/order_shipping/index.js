import React, { Component } from 'react'
import TabelOrderShipping from './OrderShipping'
import {listOrder} from './api/api-order'




export default class index extends Component {

    state = {
        expeditionRoutes: []
    }


    componentDidMount(){
        this.showListOrder();
    }

    showListOrder = ()=> {
        listOrder().then(data=> {
            this.setState({
                expeditionRoutes: data
            })
        })
    }




    render() {
        const {expeditionRoutes} = this.state
        return (
            <>
            <TabelOrderShipping 
                expeditionRoutes = {expeditionRoutes}
            />
            </>
        )
    }
}
