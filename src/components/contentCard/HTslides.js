import React, {useState,useEffect,useRef} from 'react';
// import './ContentCard.css'
import HotTrack from './HotTrack'
import BtnRight from "../../resource/right.png";
import BtnLeft from "../../resource/left.png";



const TOTAL_SLIDES = 2;

const HTslides = () => {

    
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
                        {currentSlide}

            <div className="HT_sectionarea">

                        <div className="SliderContainer" ref={slideRef}>

                                {/* 슬라이드 버튼 */}

                                {/* 각 컨텐츠 */}
                                <HotTrack 
                                    hottrackInfor={{name:"Apple", 
                                    imgUrl:"https://t1.daumcdn.net/cfile/tistory/18614A3C4FC857C32D", 
                                    text:"first content"}}
                                />

                                <HotTrack 
                                    hottrackInfor={{name:"Berry", 
                                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_nN0dcvrM4jttfdeFEbEkpqhqcrEfaROzg&usqp=CAUsea.jpg",  
                                    text:"first content"}}
                                />
                                
                                <HotTrack 
                                    hottrackInfor={{name:"Water Melon", 
                                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXb2c49z6CLtiIPE3znpTYp9F-EBNB6MwCg&usqp=CAU", 
                                    text:"first content"}}
                                />

                                <HotTrack 
                                    hottrackInfor={{name:"Grape", 
                                    imgUrl:"https://ml0kkrxew41d.i.optimole.com/g0hcq7Y-SzXT3ega/w:auto/h:auto/q:55/http://chicagokoreatimes.com/wp-content/uploads/2019/12/CKO2019-12-27A011.jpg", 
                                    text:"first content"}}
                                />
                                <HotTrack 
                                    hottrackInfor={{name:"Pear", 
                                    imgUrl:"https://previews.123rf.com/images/kaiskynet/kaiskynet1509/kaiskynet150900198/45558011-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD-%EC%9C%84%EC%97%90-%EB%B0%B0-%EA%B3%BC%EC%9D%BC.jpgsea.jpg", 
                                    text:"first content"}}
                                />

                                <HotTrack 
                                    hottrackInfor={{name:"Cherry", 
                                    imgUrl:"https://image.news1.kr/system/ap/2017/6/30/2615114/dims/optimizec", 
                                    text:"first content"}}
                                />
                                <HotTrack 
                                    hottrackInfor={{name:"Grape", 
                                    imgUrl:"https://ml0kkrxew41d.i.optimole.com/g0hcq7Y-SzXT3ega/w:auto/h:auto/q:55/http://chicagokoreatimes.com/wp-content/uploads/2019/12/CKO2019-12-27A011.jpg", 
                                    text:"first content"}}
                                />
                                <HotTrack 
                                    hottrackInfor={{name:"Pear", 
                                    imgUrl:"https://previews.123rf.com/images/kaiskynet/kaiskynet1509/kaiskynet150900198/45558011-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD-%EC%9C%84%EC%97%90-%EB%B0%B0-%EA%B3%BC%EC%9D%BC.jpgsea.jpg", 
                                    text:"first content"}}
                                />

                                <HotTrack 
                                    hottrackInfor={{name:"Cherry", 
                                    imgUrl:"https://image.news1.kr/system/ap/2017/6/30/2615114/dims/optimizec", 
                                    text:"first content"}}
                                />
                            </div>

                    </div>
                            <div>
                                {/* 슬라이드 버튼 */}
                                    
                                <button className="HTclickBtn_L" onClick={slideBtn_L}>
                                    <img className="btnSize" src={BtnLeft}/>
                                </button>

                                <button className="HTclickBtn_R" onClick={slideBtn_R}>
                                    <img className="btnSize"  src={BtnRight}/>
                                </button>
                            </div>
        </div>
    );
};

export default HTslides;