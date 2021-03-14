import React, {Component} from 'react'
import {deleteUsers, listUsers} from './api-users'
import { TableUsers } from './users-component';
// import AddEditForm from './addEditForm'
import { Redirect } from 'react-router-dom'

import axios from 'axios'

  

export default class Users extends Component {

    // 1. declarasikan users[] state
    state = {
        users : [],
        dataEditRow : null,
        isModalShow : false
    }



    refresh = () => {
        // re-renders the component
        this.setState({});
      };


    // 3. call showListusers to fill users[] on first time render
    componentDidMount() {
        this.showListUsers();
    }



    // 2.panggil listusers dari api-users, kemudian isi users[] state dengan data dari listusers
    showListUsers = () => {
        listUsers().then(data => {
            // console.log(data)
            this.setState({
                users: data
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
        deleteUsers(value).then(response => {
            console.log(response);

        }).catch(function (error) {
            console.log(error);
        });;

        this.onRefreshTable();
    }

    onRefreshTable =()=>{
        this.refresh()
        this.showListUsers();
        
    }




    


    



    render() {
  
            const {  users, isModalShow, dataEditRow } = this.state;
            return (
                <div>
                    <TableUsers 
                    users = {users}
                    // users = {users.sort((a, b) => a.user_id - b.user_id)}
                        setShowModal = {this.onShowModal}
                        setDelete = {this.onDeleteRow}
                        setEdit = {this.onEditRow}
                            
                    ></TableUsers>
                    {/* {
                        (isModalShow ? (
                            <AddEditForm
                            setShowModal = {this.onShowModal}
                            setRefreshTable = {this.onRefreshTable}
                            users = {dataEditRow}
                            />) : null)
                    } */}
                </div>
            )
    }
}
