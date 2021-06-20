import React, {useState} from 'react'
import Footer from "../components/Footer"
import UploadArtForm from '../components/UploadArtForm'
import ImgGrid from '../components/ImgGrid'
import Modal from '../components/Modal'

import '../css/Art.css'
function Art() {
    const [selectedImg, setSelectedImg] = useState(null);
    return (
        <div className='art'>
            <h1>Art</h1>
            <h2>Imagenes de la comunidad</h2>
            <UploadArtForm/>
            <ImgGrid setSelectedImg={setSelectedImg}/>
            {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
            <Footer/>
        </div>
    )
}

export default Art
