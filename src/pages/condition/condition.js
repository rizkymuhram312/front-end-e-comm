import React, { Component } from 'react';
import { listCond, deleteCond } from './api-condition';
import { AllCond } from './formCond';
import CondI from './addEditCond';


export default class condition extends Component {    
    state = {
        conditions: [],
        dataEditRow: null,
        isModalShow: false
    }

    componentDidMount() {
        this.showListCond();
        // this.setRefreshTable();

    }

   
    showListCond = () => {
        listCond().then(data => {
            console.log(data);
            this.setState({
                // this problem
                conditions: data
            })
        })
    }
    onShowModal = (value) => {
        // console.log(value);
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
        console.log(deleteCond);
        deleteCond(value).then(response => {
            console.log(response);
        }).catch(function (error) {
            console.log(error)
            console.log(error);

        })
        this.onRefreshTable()
    }

    onRefreshTable = () => {
        this.showListCond();
    }

    render() {
        const { conditions, isModalShow, dataEditRow } = this.state;
        console.log(conditions);
        return (
            <>
                <AllCond
                    conditions={conditions}
                    setShowModal={this.onShowModal}
                    setDelete={this.onDeleteRow}
                    setRefreshTable={this.onRefreshTable}
                    setEdit={this.onEditRow}
                    >
                </AllCond>
                {
                    (isModalShow ? (
                        <CondI
                            setShowModal={this.onShowModal}
                            setRefreshTable={this.onRefreshTable}
                            condition={dataEditRow}
                        />) : null)
                }
            </>
        )
    }


}
