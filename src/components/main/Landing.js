import React, {useState,useEffect,useRef} from 'react';
import {useHistory} from 'react-router-dom'
// import DownImg from '../navigation/DownImg';
import MenuBar from '../navigation/MenuBar';
import './Landing.css'

const Landing = () => {
    const history = useHistory();
    const [spinIndex, setSpinIndex] = useState(0);
    const [canScroll, setCanScroll] = useState(true);
    const sectionTitle = [ 'Main', 'Delivery', 'Review','Hotmenu','Downintro' ];
    const mainContent = useRef();

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

    


    return (
        <main className="full_screen">
         
           <MenuBar/>
          
            <div className="main_content" onWheel = {wheel} ref={mainContent}>

            

                {/* 첫번째 페이지 */}
                <section className="fbp main" data-title="Main">

                {/* <DownImg/> */}

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
                </section>

                {/* 두번째 페이지 */}
                <section className="fbp delivery" data-title="Delivery">
                    <div className="section_container_2">
                        <div className="secondPage_thuimnail">
                                <p className="font1">
                                    다양한 영양박스<br/>
                                    아이그레 정기배송
                                
                                </p>
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
                </section>

                {/* 세번째 페이지 */}
                <section className="fbp review" data-title="Review">
                    <div className="section_container_3">
                    <div className="thirdPage_thuimnail">
                                <p className="font1">
                                    #아이그레<br/>
                                    Review
                                
                                </p>
                                <p className="font2">
                                            실제 정기배송을 이용한 <br/>
                                            고객님들의 후기입니다 
                                </p>
                        </div>
                        <button className="section_link_2" onClick={()=>{history.push('/WidePage')}}>
                            <span>
                                {/* 2번섹션기능 중복사용 */}
                                <a className="size2">
                                    아이그레<br/>
                                    앱 다운로드
                                </a>
                            </span>
                        </button>
                    </div>
                </section>

                {/*  네번째 페이지 */}
                <section className="fbp hotmenu" data-title="Hotmenu">
                <div className="section_container_4">
                    <div className="fourthPage_thuimnail">
                    <div className="thirdPage_thuimnail">
                                <p className="font1">
                                #인기상품<br/>
                                
                                
                                </p>
                                <p className="font2">
                                아이그레가 자신있게<br/>
                                추천드리는 상품입니다.
                                </p>
                        </div>
                        <button className="section_link_2" onClick={()=>{history.push('/WidePage')}}>
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
                <section className="fbp downintro" data-title="Downintro">
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