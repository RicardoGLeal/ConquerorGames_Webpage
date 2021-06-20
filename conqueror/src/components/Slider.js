import React, {useState} from 'react';
import ImgComp from './ImgComp';
import '../css/Slider.css';

function Slider({slides}){
    const sliderArr = []

    for (const [index] of slides.entries()) {
        sliderArr.push(<ImgComp src={slides[index].image}/>)
    }

    const [x,setX] = useState(0)

    const goLeft=()=>{
        x === 100 * (sliderArr.length-1) ? setX(x+100) : setX(0);
    };

    const goRight=()=>{
        x === -100 * (sliderArr.length-1) ? setX(0) : setX(x-100);
    };

    return(
        <div className="sliderr">
            {
                sliderArr.map((item, index)=>{
                    return(
                        <div key={index} className="slidee" style = {{transform:`translateX(${x}%)`}}>
                            {item}
                        </div>
                    )
                })
            }
            <button className="goLeft" onClick={goLeft}>
                <i class="fas fa-chevron-left"></i>
            </button>
            <button class="goRight" onClick={goRight}>
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>
    );
}

export default Slider;