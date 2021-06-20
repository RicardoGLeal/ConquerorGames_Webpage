import React from 'react'
import {Carrouseldata} from '../components/Carrouseldata'
import Slider from "../components/Slider"
import Footer from "../components/Footer"
import ReactPlayer from 'react-player'

function Home() {
    return (
        <div className='home'>
            <Slider slides={Carrouseldata}/>
            <p><h1>Hola me llamo carlos</h1></p>
            <ReactPlayer 
            width="100%"
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
            <p><h1>Nuestra mision es.</h1></p>
            <Footer/>
        </div>
    )
}

export default Home
