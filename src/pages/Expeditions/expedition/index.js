import React, { Component } from 'react'
import TabelExpedition from './Expedition'
import {listExpedition, deleteExpedition} from './api/api-expedition'
import Modal from './Modal'

export default class index extends Component {
    state = {
        expedition: [],
        isModalShow:false,
        dataEditRow: null

    }

    componentDidMount(){
       this.showListExpedition();
    }

    onRefreshTable =()=>{
        this.showListExpedition();
    }


    showListExpedition = () => {
        listExpedition().then(data => {
            this.setState({
                expedition: data
            })
        })
    }

    onDelete = value =>{
        deleteExpedition(value).then(Response=>{
            console.log(Response);
            this.onRefreshTable();
        }).catch(function (error){
            console.log(error)
        });
    }


    onShowModal = (value) => {
        this.setState({
            isModalShow: value
        })
        
    }


    onEditRow = value =>{
        this.setState({
            dataEditRow: value
        })
        this.onShowModal(true);
        this.onRefreshTable();
    }

    


  

    render() {
        const {expedition, isModalShow, dataEditRow} = this.state;
        return (
            <>
                <TabelExpedition 
                    expedition= {expedition}
                    setDelete= {this.onDelete}
                    setShowModal ={this.onShowModal}
                    setEdit= {this.onEditRow}
                />
                {
                    (isModalShow ? (
                        <Modal
                            setShowModal={this.onShowModal}
                            setRefreshTabel={this.onRefreshTable}
                            expedition = {dataEditRow}
                        /> 
                    ): null)
                }
            </>
          
        )
    }
}
