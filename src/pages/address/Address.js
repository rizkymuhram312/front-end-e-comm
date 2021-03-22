
import React, { useState } from 'react'

export default function Address() {
    const user_id = localStorage.getItem('dataId');
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [kecamatan, setKecamatan] = useState('');
    const [kodepos, setKodepos] = useState('');
    const [mainAddress, setMainAddress] = useState('');
    const [optionalAddress, setOptionalAddress] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [Isprimary, SetIsPrimary] = useState(true);
    const [langitude, setLangitude] = useState('');
    const [latitude, setLatitude] = useState('');

    

    const onChangeMain = (e) => {
        const value = e.target.value
        setMainAddress(value)
        setError('')
    
    }
    
    
    const onChangeOptional = (e) => {
        const value = e.target.value
        setOptionalAddress(value)
        setError('')
    
    }

    
    const onChangeZipcode = (e) => {
        const value = e.target.value
        setZipcode(value)
        setError('')
    
    }

    
    const onChangePrimary = (e) => {
        const value = e.target.value
        SetIsPrimary(value)
        setError('')
    
    }

    
    const onChangeLangitude = (e) => {
        const value = e.target.value
        setLangitude(value)
        setError('')
    
    }

    
    const onChangeLatitude = (e) => {
        const value = e.target.value
        setLatitude(value)
        setError('')
    
    }


    return (
        <div>
            
        </div>
    )
}
