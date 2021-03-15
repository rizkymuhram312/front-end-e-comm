import React, {Component} from 'react'
import {deleteKecamatan, listKecamatan} from './api-kecamatan'
import { TableKecamatan } from './kecamatan-component';
import AddEditForm from './addEditForm'



export default class Kecamatan extends Component {

    // 1. declarasikan Kecamatan[] state
    state = {
        kecamatan : [],
        dataEditRow : null,
        isModalShow : false
    }


    refresh = () => {
        // re-renders the component
        this.setState({});
      };


    // 3. call showListKecamatan to fill Kecamatan[] on first time render
    componentDidMount() {
        this.showListKecamatan();
    }



    // 2.panggil listKecamatan dari api-Kecamatan, kemudian isi Kecamatan[] state dengan data dari listKecamatan
    showListKecamatan = () => {
        listKecamatan().then(data => {
            this.setState({
                kecamatan: data
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
        deleteKecamatan(value).then(response => {
            // console.log(response);

        }).catch(function (error) {
            console.log(error);
        });;

        this.onRefreshTable();
    }

    onRefreshTable =()=>{
        this.refresh()
        this.showListKecamatan();
        
    }





    render() {
  
            const { kecamatan , isModalShow, dataEditRow } = this.state;
            return (
                <div>
                    <TableKecamatan kecamatan = {kecamatan.sort((a, b) => a.kec_id - b.kec_id)}
                        setShowModal = {this.onShowModal}
                        setDelete = {this.onDeleteRow}
                        setEdit = {this.onEditRow}
                            
                    ></TableKecamatan>
                    {
                        (isModalShow ? (
                            <AddEditForm
                            setShowModal = {this.onShowModal}
                            setRefreshTable = {this.onRefreshTable}
                            Kecamatan = {dataEditRow}
                            />) : null)
                    }
                </div>
            )
    }
}
