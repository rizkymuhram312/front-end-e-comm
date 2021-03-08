import React, { Component } from 'react'
import TabelExpeditionRoutes from './Expedition_routes'
import Modal from './Modal'
import {ListExpeditionRoute, DeleteExpeditionRoute} from './api/api-expedition_route'
import {listExpedition} from '../expedition/api/api-expedition'

export default class index extends Component {
    
    state = {
        isModalShow: false,
        expeditionRoutes:[],
        expedition:[],
        select: "",
        isSelected: false,
        dataEditRow: null
    }

    componentDidMount(){
        this.showListExpeditionRoute()
        this.showListExpedition()

    }

    onRefreshTable= ()=>{
        this.showListExpeditionRoute();
    }

    onHandleSelect= e =>{
        // ternary opration
        // const value = e.target.selectedIndex !==0 ? e.target.options[e.target.selectedIndex].value : null;
        const value =  e.target.options[e.target.selectedIndex].value ;
        if(value !==0){
            this.setState({
                select:value,
                isSelected: true
            })
        }
    }


    showListExpeditionRoute=()=>{
        ListExpeditionRoute().then(data=>{
            this.setState({
                expeditionRoutes: data
            })
        })
    }


    showListExpedition=()=>{
        listExpedition().then(data=>{
            this.setState({
                expedition: data
                
            })
        })
    }

    onShowModal = (value) => {
        this.setState({
            isModalShow: value
        })
        
    }

    onDelete = value =>{
        DeleteExpeditionRoute(value).then(Response=>{
            console.log(Response)
        }).catch((err)=>{
            console.log(err.message)
        })
    }



    onEditRow = value => {
        this.setState({
            dataEditRow: value
        })
        this.onShowModal(true);
        this.onRefreshTable();
    }
    



    render() {
        const {isModalShow, expeditionRoutes, expedition, select, isSelected, dataEditRow}= this.state;
        return (
            <div>
                <TabelExpeditionRoutes
                    setShowModal = {this.onShowModal}
                    expeditionRoutes= {expeditionRoutes}
                    expedition = {expedition}
                    select ={select}
                    isSelected={isSelected}
                    onHandleSelect={this.onHandleSelect}
                    setDelete= {this.onDelete}
                    setEdit = {this.onEditRow}
                />
                {
                    (isModalShow ? (
                        <Modal
                            setShowModal= {this.onShowModal}
                            setRefreshTabel={this.onRefreshTable}
                            expeditionRoutes = {dataEditRow}
                        />
                    ) : null)
                }
                
            </div>
        )
    }
}
