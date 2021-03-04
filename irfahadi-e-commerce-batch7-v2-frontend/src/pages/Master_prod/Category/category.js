import React, { Component } from 'react';
import { listcate, deletecate } from '../../../api/api-category';
import {  AllCate } from './formCategory';
import AddEdit from './addEditCate';


export default class category extends Component {
    // declare regions[] state
    state = {
        category: [],
        dataEditRow: null,
        isModalShow: false
    }

    // 3. call showListRegion to fill category[] on first time render
    componentDidMount() {
        this.showListCategory();
        // this.setRefreshTable();

    }

    // 2. call listRegion from api-category, then fill category[] state
    // with data from listCategory()
    showListCategory = () => {
        listcate().then(data => {
            this.setState({
                // this problem
                category: data
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
        deletecate(value).then(response => {
            console.log(response);
        }).catch(function (error) {
            console.log(error)
            console.log(error);

        })
        this.onRefreshTable()
    }

    onRefreshTable = () => {
        this.showListCategory();
    }

    render() {
        const { category, isModalShow, dataEditRow } = this.state;
        return (
            <>
                <AllCate
                    category={category}
                    setShowModal={this.onShowModal}
                    setDelete={this.onDeleteRow}
                    setRefreshTable={this.onRefreshTable}
                    setEdit={this.onEditRow}>
                </AllCate>
                {
                    (isModalShow ? (
                        <AddEdit
                            setShowModal={this.onShowModal}
                            setRefreshTable={this.onRefreshTable}
                            category={dataEditRow}
                        />) : null)
                }
            </>
        )
    }


}
