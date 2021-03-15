import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <center>
                <font size="7"><b>Selamat Datang {localStorage.getItem('dataUserEmail')}</b></font>
                </center>
            </div>
        )
    }
}
