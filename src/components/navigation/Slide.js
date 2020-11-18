import React, { useEffect, useRef, useState } from 'react';
import slide1 from '../../resource/wood.jpg'
import slide2 from '../../resource/sea.jpg'
import slide3 from '../../resource/wood.jpg'

import './Navigation.css'


const Slide = () => {
    const slideTitle = ['Fist Page', 'Second Page','Third page'];
    const [slide, setSlide] = useState(0);
    const [spinIndex, setSpinIndex] = useState(true);
    const mainContent = useRef();

    const buttonClick = e =>{
        setSlide(slideTitle.indexOf(e.target.textContent.trim()))
    }

    useEffect(()=>{
        buttonClick(spinIndex);
        console.log(spinIndex)
    })

    const click = e =>{
        if( slide ){
            setSlide(false);
            if(e.AlfaX > 0){
                if(spinIndex < slideTitle.length-1) setSpinIndex(spinIndex + 1);
            }else{
                if(spinIndex > 0 ) setSpinIndex(spinIndex -1)
            }
        }
    }



    function clickSlide(count){
        mainContent.current.setAttribute('style','\
        transform: translateX(-'+ count*100 +'vh);\
        ');
    };

    // document.querySelector('btn1').addEventListener('click', function(){
    //     document.querySelector('.container').style.transform = 'transform(-100vm)';
    // });


    return (
        <div className="mainSlide">
            <div className="container">

                <div className="inner" data-title="Fist Page">
                    <img src={slide1}/>
                </div>

                <div className="inner"  data-title="Second Page">
                    <img src={slide2}/>
                </div>

                <div className="inner"  data-title="Third Page">
                    <img src={slide3}/>
                </div>

                <button className="btn1" onClick={click} ref={mainContent}>1</button>
                <button className="btn2">2</button>
                <button className="btn3">3</button>

            </div>
        </div>
    );
};

export default Slide;