import React, {Component} from 'react'
import {deleteKodepos, listKodepos} from './api-kodepos'
import { TableKodepos } from './kodepos-component';
import AddEditForm from './addEditForm'



export default class Kodepos extends Component {

    // 1. declarasikan Kodepos[] state
    state = {
        kodepos : [],
        dataEditRow : null,
        isModalShow : false
    }


    refresh = () => {
        // re-renders the component
        this.setState({});
      };


    // 3. call showListKodepos to fill Kodepos[] on first time render
    componentDidMount() {
        this.showListKodepos();
    }



    // 2.panggil listKodepos dari api-Kodepos, kemudian isi Kodepos[] state dengan data dari listKodepos
    showListKodepos = () => {
        listKodepos().then(data => {
            this.setState({
                kodepos: data
            })
        })
    }



    onShowModal = (value) => {
        this.setState({
            isModalShow: value
        })
        this.refresh()

        
    }

    onEditRow = (value)=>{

        this.setState({
            dataEditRow : value
        })
        this.onShowModal(true);
        this.onRefreshTable();
    }

    onDeleteRow = (value)=>{
        deleteKodepos(value).then(response => {
            // console.log(response);

        }).catch(function (error) {
            console.log(error);
        });;

        this.onRefreshTable();
    }

    onRefreshTable =()=>{
        this.refresh()
        this.showListKodepos();
        
    }





    render() {
  
            const { kodepos , isModalShow, dataEditRow } = this.state;
            return (
                <div>
                    <TableKodepos kodepos = {kodepos.sort((a, b) => a.kodepos - b.kodepos)}
                        setShowModal = {this.onShowModal}
                        setDelete = {this.onDeleteRow}
                        setEdit = {this.onEditRow}
                            
                    ></TableKodepos>
                    {
                        (isModalShow ? (
                            <AddEditForm
                            setShowModal = {this.onShowModal}
                            setRefreshTable = {this.onRefreshTable}
                            Kodepos = {dataEditRow}
                            />) : null)
                    }
                </div>
            )
    }
}
