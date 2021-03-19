import React, { Component } from 'react';
import { listbrand, deletebrand } from './api-brand';
import { AllBrand } from './formBrand';
import BrandI from './addEditBrand';



export default class brand extends Component {
    // declare regions[] state
    state = {
        brand: [],
        search: "",
        dataEditRow: null,
        isModalShow: false
    }

    componentDidMount() {
        this.showListbrand();
    }

    onHandleChange = (e) => {
        this.setState({
          search: e.target.value,
        });
        // console.log(e.target.value);
        console.log(this.state.search);
      };

    showListbrand = () => {
        listbrand().then(data => {
            console.log(data);
            this.setState({
                brand: data
            })
        })
    }
    onShowModal = (value) => {
        this.setState({
            isModalShow: value
        })
    }
    onEditRow = (value) => {
        this.setState({
            dataEditRow: value
        })
        this.onShowModal(true);
    }
    onDeleteRow = (value) => {
        deletebrand(value).then(response => {
            console.log(response);
            this.onRefreshTable()
        }).catch(function (error) {
            console.log(error)
            console.log(error);            
        })
    }

    onRefreshTable = () => {
        this.showListbrand();
    }

    render() {
        const { brand, isModalShow, dataEditRow, onHandleChange } = this.state;
        return (
            <>
                <AllBrand
                    brand={brand}
                    setShowModal={this.onShowModal}
                    setDelete={this.onDeleteRow}
                    setRefreshTable={this.onRefreshTable}
                    setEdit={this.onEditRow}>
                        brand={this.onHandleChange}
                </AllBrand>
                {
                    (isModalShow ? (
                        <BrandI
                            setShowModal={this.onShowModal}
                            setRefreshTable={this.onRefreshTable}
                            brand={dataEditRow}
                        />) : null)
                }
            </>
        )
    }


}
