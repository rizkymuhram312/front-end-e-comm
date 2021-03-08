import React, {Component} from 'react'
import {deleteCity, listCity} from './api-city'
import { TableCity } from './city-component';
import AddEditForm from './addEditForm'



export default class City extends Component {

    // 1. declarasikan city[] state
    state = {
        city : [],
        dataEditRow : null,
        isModalShow : false
    }


    refresh = () => {
        // re-renders the component
        this.setState({});
      };


    // 3. call showListcity to fill city[] on first time render
    componentDidMount() {
        this.showListCity();
    }



    // 2.panggil listcity dari api-city, kemudian isi city[] state dengan data dari listcity
    showListCity = () => {
        listCity().then(data => {
            this.setState({
                city: data
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
        deleteCity(value).then(response => {
            console.log(response);

        }).catch(function (error) {
            console.log(error);
        });;

        this.onRefreshTable();
    }

    onRefreshTable =()=>{
        this.refresh()
        this.showListCity();
        
    }





    render() {
  
            const { city , isModalShow, dataEditRow } = this.state;
            return (
                <div>
                    <TableCity city = {city.sort((a, b) => a.city_id - b.city_id)}
                        setShowModal = {this.onShowModal}
                        setDelete = {this.onDeleteRow}
                        setEdit = {this.onEditRow}
                            
                    ></TableCity>
                    {
                        (isModalShow ? (
                            <AddEditForm
                            setShowModal = {this.onShowModal}
                            setRefreshTable = {this.onRefreshTable}
                            city = {dataEditRow}
                            />) : null)
                    }
                </div>
            )
    }
}
