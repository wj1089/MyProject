import React, {useState,useEffect,useRef} from 'react';
import './ContentCard.css'
import '../main/Landing.css'
import ReviewCard from './ReviewCard'
import BtnRight from "../../resource/right.png";
import BtnLeft from "../../resource/left.png";
import axios from 'axios';



const TOTAL_SLIDES = 2;

const RVslides = () => {
    
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);

    // 다음슬라이드
        const slideBtn_R = () => {
            if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
            } else {
            setCurrentSlide(currentSlide + 1);
            }
        };

    // 전슬라이드
        const slideBtn_L = () => {
            if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
            } else {
            setCurrentSlide(currentSlide - 1);
            }
        };

    useEffect(() => {
        slideRef.current.style.transition = "all 1.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }, [currentSlide]);




    return (
        <div>

            <div className="revSlide">
            {currentSlide}

                <div className="SliderContainer" ref={slideRef}>
                     
                    <ReviewCard
                        reviewInfor={{
                            imgUrl:"https://lh3.googleusercontent.com/proxy/owdwckDRadaf9RTTvxSzhoPLC2xy61B_Iw3X1o13ezxJIeEI27-ZYio0dIMkMcz9nTXDHqInHzhThm1jnxGlePTa5Kr57ZhqSkyV-3LA8Ks1C5MJg8UfwpyzLzmfzu_6hZ0LArI8NQdA4gyUWZuuzKt4BpBBoKad0EV0Eeyiox6oCSoPE88zY7mV6XeDYTiloPAKYs7hrLjp4fCUPOPSavLBZYooGOj_hytHC3yI0iJ6779pP0XPoJI4zgWq4VFFVohEApZVT7BZh2BjBPe0UDHfJjoVyfJ9A5jGMw89VA",
                            review:"슬라이드 설명란"}}
                    />

                </div>
            </div>
                <div>
                        <button className="clickBtn_L" onClick={slideBtn_L}>
                            <img className="btnSize" src={BtnLeft}/>
                        </button>

                        <button className="clickBtn_R" onClick={slideBtn_R}>
                            <img className="btnSize"  src={BtnRight}/>
                        </button>
                </div>
        </div>
    );
};

export default RVslides;