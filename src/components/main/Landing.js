import React, {useState,useEffect,useRef} from 'react';
import {useHistory} from 'react-router-dom'
import { HotTrack } from '../contentCard';
import MenuBar from '../navigation/MenuBar';
import ReviewCard from '../contentCard/ReviewCard.js';
import BtnRight from "../../resource/right.png";
import BtnLeft from "../../resource/left.png";

import './Landing.css'
import '../contentCard/ContentCard.css';


// import DownImg from '../navigation/DoxwnImg';
const TOTAL_SLIDES = 3;

const Landing = () => {

    const history = useHistory();
    const [spinIndex, setSpinIndex] = useState(0);
    const [canScroll, setCanScroll] = useState(true);
    const sectionTitle = [ 'Main', 'Delivery', 'Review','Hotmenu','Downintro' ];
    const mainContent = useRef();
    
//main 스크롤
    useEffect(() => {        
        scrollContent(spinIndex);
        console.log(spinIndex)

    }, [spinIndex]);

    useEffect(() => {
        setTimeout(function() {
            setCanScroll(true);
        }, 100);  
    }, [canScroll]);

    const buttonClick = e =>{
        setSpinIndex(sectionTitle.indexOf(e.target.textContent.trim()))
    }

    const wheel = e => {
        if ( canScroll ) {
            setCanScroll(false);
            if ( e.deltaY > 0 ) {
                // scroll down
                if ( spinIndex < sectionTitle.length-1 ) setSpinIndex(spinIndex + 1);
            } else {
                // scroll up
                if ( spinIndex > 0 )  setSpinIndex(spinIndex - 1);
            }
        }   
      };  

    function scrollContent(count) {
        mainContent.current.setAttribute('style', '\
        -webkit-transform: translateY(-'+ count*100 +'vh);\
        -ms-transform: translateY(-'+ count*100 +'vh);\
        -o-transform: translateY(-'+ count*100 +'vh);\
        transform: translateY(-'+ count*100 +'vh);\
        ');
    };



// section3 슬라이더


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
        <main className="full_screen">
         
           <MenuBar/>
          
            <div className="main_content" onWheel = {wheel} ref={mainContent}>

            

                {/* 첫번째 페이지 */}
                <section className="fbp main" data-title="Main">

                {/* OutSide Image */}
                <div className="outSide_Image">      

                {/* <DownImg/> (보류)*/}

                    <div className="section_container">
                        <div className="fistPage_thuimnail">
                        <p className="font1">아이그레</p>
                        <p className="font2">
                                    어린이 식품 <br/>
                                    정기배송 서비스
                        </p>
                        </div>
                        <button className="section_link_1" onClick={()=>{history.push('/WidePage')}}>
                            앱 다운로드
                        </button>
                    </div>

                    <div className="inSide_Img">
                        <p>hello</p>
                    </div>
                    </div>
                </section>

                {/* 두번째 페이지 */}
                <section className="fbp delivery" data-title="Delivery">
                 
                <div className="outSide_Image">    

                    <div className="section_container_2">
                        <div className="secondPage_thuimnail">
                                <p className="font1"> 다양한 상품을</p>
                                <p className="font1-2">편리한 정기배송으로</p>
                                <p className="font2">
                                            매달 새로운 구성의 정기배송 박스를 <br/>
                                            기존 대비 합리적인 비용으로 <br/>
                                            만나보실 수 있습니다.
                                </p>
                        </div>
                        <button className="section_link_2" onClick={()=>{history.push('/WidePage')}}>
                            <span>
                                <a className="size2">
                                    아이그레<br/>
                                    앱 다운로드
                                </a>
                            </span>
                        </button>
                    </div>
                    </div>
                </section>





                {/* 세번째 페이지 */}
                <section className="fbp review" data-title="Review">

                {/* outSide_Image_5 */}
                <div className="outSide_Image_3">      

                    <div className="section_container_3">
                        <div className="thirdPage_thuimnail">
                                    <p className="font1"> #아이그레</p>
                                    <p className="font1-2">고객후기</p>
                                    <p className="font2">
                                        정기배송을 경험한 <br/>
                                        고객님들의 후기를 <br/>
                                        확인해보세요. 
                                    </p>
                        </div>

                        {/* 리뷰카드 슬라이드 */}
                    <div className="revSlide">
                            {currentSlide}

                        <div className="SliderContainer" ref={slideRef}>

                            <ReviewCard
                                reviewInfor={{
                                    imgUrl:"https://lh3.googleusercontent.com/proxy/owdwckDRadaf9RTTvxSzhoPLC2xy61B_Iw3X1o13ezxJIeEI27-ZYio0dIMkMcz9nTXDHqInHzhThm1jnxGlePTa5Kr57ZhqSkyV-3LA8Ks1C5MJg8UfwpyzLzmfzu_6hZ0LArI8NQdA4gyUWZuuzKt4BpBBoKad0EV0Eeyiox6oCSoPE88zY7mV6XeDYTiloPAKYs7hrLjp4fCUPOPSavLBZYooGOj_hytHC3yI0iJ6779pP0XPoJI4zgWq4VFFVohEApZVT7BZh2BjBPe0UDHfJjoVyfJ9A5jGMw89VA",
                                    review:"슬라이드 설명란"}}
                            />
                            
                            <ReviewCard
                                reviewInfor={{
                                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk947s--HqgeZk3Mtm4DSzvl5qGISexz0wKQ&usqp=CAU",
                                    review:"슬라이드 설명란"}}
                                />
                            <ReviewCard
                                reviewInfor={{
                                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwIfVA1gedjl4srs_cRj60gbybmruU3QiZw&usqp=CAU",
                                    review:"슬라이드 설명란"}}
                                />
                             <ReviewCard
                                reviewInfor={{
                                    imgUrl:"https://lh3.googleusercontent.com/proxy/owdwckDRadaf9RTTvxSzhoPLC2xy61B_Iw3X1o13ezxJIeEI27-ZYio0dIMkMcz9nTXDHqInHzhThm1jnxGlePTa5Kr57ZhqSkyV-3LA8Ks1C5MJg8UfwpyzLzmfzu_6hZ0LArI8NQdA4gyUWZuuzKt4BpBBoKad0EV0Eeyiox6oCSoPE88zY7mV6XeDYTiloPAKYs7hrLjp4fCUPOPSavLBZYooGOj_hytHC3yI0iJ6779pP0XPoJI4zgWq4VFFVohEApZVT7BZh2BjBPe0UDHfJjoVyfJ9A5jGMw89VA",
                                    review:"슬라이드 설명란"}}
                            />
                            
                            <ReviewCard
                                reviewInfor={{
                                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk947s--HqgeZk3Mtm4DSzvl5qGISexz0wKQ&usqp=CAU",
                                    review:"슬라이드 설명란"}}
                                />
                            <ReviewCard
                                reviewInfor={{
                                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwIfVA1gedjl4srs_cRj60gbybmruU3QiZw&usqp=CAU",
                                    review:"슬라이드 설명란"}}
                                />
                            
                            <ReviewCard
                                reviewInfor={{
                                    imgUrl:"https://lh3.googleusercontent.com/proxy/owdwckDRadaf9RTTvxSzhoPLC2xy61B_Iw3X1o13ezxJIeEI27-ZYio0dIMkMcz9nTXDHqInHzhThm1jnxGlePTa5Kr57ZhqSkyV-3LA8Ks1C5MJg8UfwpyzLzmfzu_6hZ0LArI8NQdA4gyUWZuuzKt4BpBBoKad0EV0Eeyiox6oCSoPE88zY7mV6XeDYTiloPAKYs7hrLjp4fCUPOPSavLBZYooGOj_hytHC3yI0iJ6779pP0XPoJI4zgWq4VFFVohEApZVT7BZh2BjBPe0UDHfJjoVyfJ9A5jGMw89VA",
                                    review:"슬라이드 설명란"}}
                            />
                            
                            <ReviewCard
                                reviewInfor={{
                                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk947s--HqgeZk3Mtm4DSzvl5qGISexz0wKQ&usqp=CAU",
                                    review:"슬라이드 설명란"}}
                                />
                            <ReviewCard
                                reviewInfor={{
                                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUwIfVA1gedjl4srs_cRj60gbybmruU3QiZw&usqp=CAU",
                                    review:"슬라이드 설명란"}}
                                />
                        </div>
                        </div>

                            <button className="clickBtn_L" onClick={slideBtn_L}>
                                <img className="btnSize" src={BtnLeft}/>
                            </button>

                            <button className="clickBtn_R" onClick={slideBtn_R}>
                                <img className="btnSize"  src={BtnRight}/>
                            </button>
                    <div>

                        </div>
                        {/* 다운버튼 */}
                        <button className="section_link_3" onClick={()=>{history.push('/WidePage')}}>
                            <span>
                                {/* 2번섹션기능 중복사용 */}
                                <a className="size2">
                                    아이그레<br/>
                                    앱 다운로드
                                </a>
                            </span>
                        </button>
                        </div>
                    </div>
                </section>

                {/*  네번째 페이지 */}
                <section className="fbp hotmenu" data-title="Hotmenu">
                

                <div className="section_container_4">
                    <div className="fourthPage_thuimnail">
                        <p className="font1">#인기상품<br/></p>
                        <p className="font2">
                        아이그레가 자신있게<br/>
                        추천드리는 상품입니다.
                        </p>

                        <button className="HT_btn">더보기</button>
                    </div>

                  
                    {currentSlide}

                    <div className="HT_sectionarea">

                                {/* 슬라이드 버튼 */}

                                {/* 각 컨텐츠 */}
                                <HotTrack 
                                    contentInfor={{name:"Apple", 
                                    imgUrl:"https://t1.daumcdn.net/cfile/tistory/18614A3C4FC857C32D", 
                                    text:"first content"}}
                                />

                                <HotTrack 
                                    contentInfor={{name:"Berry", 
                                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT_nN0dcvrM4jttfdeFEbEkpqhqcrEfaROzg&usqp=CAUsea.jpg",  
                                    text:"first content"}}
                                />
                                
                                <HotTrack 
                                    contentInfor={{name:"Water Melon", 
                                    imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXb2c49z6CLtiIPE3znpTYp9F-EBNB6MwCg&usqp=CAU", 
                                    text:"first content"}}
                                />

                                <HotTrack 
                                    contentInfor={{name:"Grape", 
                                    imgUrl:"https://ml0kkrxew41d.i.optimole.com/g0hcq7Y-SzXT3ega/w:auto/h:auto/q:55/http://chicagokoreatimes.com/wp-content/uploads/2019/12/CKO2019-12-27A011.jpg", 
                                    text:"first content"}}
                                />
                                <HotTrack 
                                    contentInfor={{name:"Pear", 
                                    imgUrl:"https://previews.123rf.com/images/kaiskynet/kaiskynet1509/kaiskynet150900198/45558011-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD-%EC%9C%84%EC%97%90-%EB%B0%B0-%EA%B3%BC%EC%9D%BC.jpgsea.jpg", 
                                    text:"first content"}}
                                />

                                <HotTrack 
                                    contentInfor={{name:"Cherry", 
                                    imgUrl:"https://image.news1.kr/system/ap/2017/6/30/2615114/dims/optimizec", 
                                    text:"first content"}}
                                />
                                <HotTrack 
                                    contentInfor={{name:"Grape", 
                                    imgUrl:"https://ml0kkrxew41d.i.optimole.com/g0hcq7Y-SzXT3ega/w:auto/h:auto/q:55/http://chicagokoreatimes.com/wp-content/uploads/2019/12/CKO2019-12-27A011.jpg", 
                                    text:"first content"}}
                                />
                                <HotTrack 
                                    contentInfor={{name:"Pear", 
                                    imgUrl:"https://previews.123rf.com/images/kaiskynet/kaiskynet1509/kaiskynet150900198/45558011-%ED%9D%B0%EC%83%89-%EB%B0%B0%EA%B2%BD-%EC%9C%84%EC%97%90-%EB%B0%B0-%EA%B3%BC%EC%9D%BC.jpgsea.jpg", 
                                    text:"first content"}}
                                />

                                <HotTrack 
                                    contentInfor={{name:"Cherry", 
                                    imgUrl:"https://image.news1.kr/system/ap/2017/6/30/2615114/dims/optimizec", 
                                    text:"first content"}}
                                />

                            
                            </div>
                            <div>
                            {/* 슬라이드 버튼 */}
                                {/* <button 
                                className="slideBtn_L" 
                                // img src={BtnRight} 
                                onClick="slideBtn_L"
                                >
                                    <img className="btnSize" src={BtnLeft}/>
                                </button>

                                <button 
                                className="slideBtn_R" 
                                onClick="slideBtn_R"
                                img src={BtnLeft}
                                >
                                    <img className="btnSize" src={BtnRight}/>
                                </button> */}
                            </div>

                    <div className="outSide_Image_4">      

                        <button className="section_link_4" onClick={()=>{history.push('/WidePage')}}>
                            <span>
                                {/* 2번섹션기능 중복사용 */}
                                <a className="size2">
                                    아이그레<br/>
                                    앱 다운로드
                                </a>
                            </span>
                        </button>
                    </div>
                    </div>
                </section>

                {/* 다섯번째 페이지 */}


                {/* OutSide Image */}

                

                <section className="fbp downintro" data-title="Downintro">
                <div className="outSide_Image_5">      

                    <div className="section_container_5">
                        <div className="fifthPage_thuimnail">
                                <p className="font1">
                                    LOGO
                                
                                </p>
                                <p className="font2">
                                            앱을 다운받으시고<br/>
                                            편리한 정기배송 서비스를<br/> 
                                            이용해보세요 <br/>
                                </p>
                        </div>
                        
                        
                        {/* 1번섹션기능 중복사용 */}
                        <button className="section_link_1" onClick={()=>{history.push('/WidePage')}}> 
                        앱 다운로드
                        </button>

                        <div className="inSide_Img_5">
                            <p>footer</p>
                        </div>
                        

                    {/* 풋터*/}
                    <footer className="full_footer">
                            <div className="footer_down">
                                <p className="underword">
                                    (주)모리아타운<br/>
                                    05854 서울특별시 송파구 법원로 114(문정동) B동 915호
                                </p>
                                    <br/>

                                <p className="underword">
                                    대표자:권오형 ㅣ 개인정보관리: 정원석
                                </p>
                                    <br/>

                                <p className="underword">
                                    사업자번호:000-00-00000 <br/>
                                    통신판매업 신고 : 0000-서울송파-0000호 (통신판매업조회)
                                </p>
                                    <br/>
                                    
                                <p className="underword">
                                    서비스관련 문의/입점문의<br/>

                                    대표전화 : 0000-0000 <br/>
                                    대표메일 : abc123@moriahtown.com<br/>
                                </p>
                                    <br/>
                                <p className="underword">
                                    @2020 Moriahtown. All Rights Reserved.
                                </p>
                            </div>       
                    </footer>
                    </div>
                    </div>

                </section>

            </div>
            <div className="section_navigation">
                {sectionTitle.map((nl, index) => {
                    return (
                        <div className={`section_button ${spinIndex === index ? "active" : ""}`}
                             onClick = {buttonClick}
                             id={`navigation-${index}`}
                             key={`navigation-${index}`}
                             >
                            <span>{nl}</span>
                        </div>
                    );
                })}
            </div>


            
        </main>
    );
};

export default Landing;