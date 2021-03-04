import React, { Component } from 'react';
import { listCond, deleteCond } from '../../../api/api-condition';
import { Allcond } from './formCond';
import CondI from './addEditCond';


export default class condition extends Component {
    
    state = {
        condition: [],
        dataEditRow: null,
        isModalShow: false
    }

    componentDidMount() {
        this.showListCond();
        // this.setRefreshTable();

    }

   
    showListCond = () => {
        listCond().then(data => {
            this.setState({
                // this problem
                condition: data
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
        const { condition, isModalShow, dataEditRow } = this.state;
        return (
            <>
                <Allcond
                    condition={condition}
                    setShowModal={this.onShowModal}
                    setDelete={this.onDeleteRow}
                    setRefreshTable={this.onRefreshTable}
                    setEdit={this.onEditRow}>
                </Allcond>
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
