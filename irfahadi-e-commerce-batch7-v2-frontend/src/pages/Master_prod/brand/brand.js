import React, { Component } from 'react';
import { listbrand, deletebrand } from '../../../api/api-brand';
import { AllBrand } from './formBrand';
import BrandI from './addEditBrand';


export default class brand extends Component {
    // declare regions[] state
    state = {
        brand: [],
        dataEditRow: null,
        isModalShow: false
    }

    // 3. call showListRegion to fill brand[] on first time render
    componentDidMount() {
        this.showListbrand();
        // this.setRefreshTable();

    }

    // 2. call listRegion from api-brand, then fill brand[] state
    // with data from listbrand()
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
        const { brand, isModalShow, dataEditRow } = this.state;
        return (
            <>
                <AllBrand
                    brand={brand}
                    setShowModal={this.onShowModal}
                    setDelete={this.onDeleteRow}
                    setRefreshTable={this.onRefreshTable}
                    setEdit={this.onEditRow}>
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
