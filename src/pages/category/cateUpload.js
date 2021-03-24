import axios from 'axios'
import React, { useState } from 'react'
import { apiProductMaster } from '../../config/apiUrl'

function CateUpload() {
    const [imageSelected, setImageSelected] = useState([])
    const [image, setImage] = useState('')
    const [caim_path, setCaimPath] = useState('')
    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append("upload_preset", "qlkloipy")

        const res = await fetch(
            'https://api.cloudinary.com/v1_1/deto1sqrl/image/upload',

            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json()

        setImage(file.secure_url)
    }
    console.log(image)

    const daftarCaim = () => {
        const data = {
            caim_path: image
        }
        axios.post(`${apiProductMaster}/categoryImg`, data)
        // .then ((result)=> {
        //     if(result) {
        //         console.log(result.data)
        //         if (result.data){
        //             set
        //         }
        //     }
        // })
    }



    return (
        <div>
            <input
                type="file"
                name="file"
                placeholder="Upload an image"
                onChange={uploadImage}
            />
            <button onClick={daftarCaim}>upload</button>
        </div>
    )
}

export default CateUpload
