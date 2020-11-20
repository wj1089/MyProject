import React, { useEffect, useRef, useState } from 'react';
import './Navigation.css';


import slideBtn_R from "../../resource/right.png";
import slideBtn_L from "../../resource/left.png";

// const TOTAL_SLIDE = 4;

const SlideBtn = () => {

//     const [currentSlide, setCurrentSilde] = useState(0);
//     const slideRef = useRef(null);


//     const slideBtn_R =()=>{
//         if(currentSlide >= TOTAL_SLIDE){
//             setCurrentSilde(0);
//         } else {
//             setCurrentSilde(currentSlide + 1);
//         }
//     };

//     const slideBtn_L =() =>{
//         if(currentSlide === 0){
//             setCurrentSilde(TOTAL_SLIDE);
//                     }else{
// setCurrentSilde(currentSlide-1);
//         }
//     };

//     useEffect(()=>{
//         slideRef.current.transition ="all 0.5s ease-in-out";
//         slideRef.current.trsform = `translateX(-${currentSlide}00%)`;
//     }, [currentSlide]);


    return (
        <div>
            <div className="slideBtn_L" onClick="">
                <a><img className="btnSize" src={slideBtn_L}/></a>
            </div>
            <div className="slideBtn_R" onClick="">
                <a><img className="btnSize" src={slideBtn_R}/></a>
            </div>
        </div>
    );
};

export default SlideBtn;