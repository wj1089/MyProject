import React, {useState,useEffect,useRef} from 'react';
import {useHistory,Link} from 'react-router-dom'
import MenuBar from '../navigation/MenuBar';
import HTslides from '../contentCard/HTslides';
import RVslides from '../contentCard/RVslides';
import Footer from '../footer/Footer';
import './Landing.css'
import AyiImage from '../../resource/logo_wm.png'
// import '../contentCard/ContentCard.css';

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



    return (
        <main className="full_screen">

            {/* 상단메뉴바 */}
            <MenuBar/>
          
            <div className="main_content" onWheel = {wheel} ref={mainContent}>
            

    {/* 첫번째 페이지 */}
                <section className="fbp main" data-title="Main">

                    {/* OutSide Image */}
                    <div className="outSide_Image">      

                        <div className="section_container">
                            <div className="fistPage_thuimnail">
                                <p className="thumImage"><img className="ayi_img" src={AyiImage}/></p>
                                <p className="font2">
                                            어린이 식품 <br/>
                                            정기배송 서비스
                                </p>
                                </div>
                                <button className="section_link_1" onClick={()=>{history.push('/WidePage')}}>
                                    앱 다운로드
                                </button>
                        </div>

                        {/* InSide Image */}
                        <div className="inSide_Img">
                            <p>hello</p>
                        </div>
                    </div>

                </section>

    {/* 두번째 페이지 */}

                <section className="fbp delivery" data-title="Delivery">
                    
                    {/* OutSide Image */}
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

                        {/* 상품리뷰 슬라이드 */}
                        <RVslides/>
                            
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

                    {/* 인기상품 슬라이드 */}
                        <HTslides/>
                        
                                
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
                <section className="fbp downintro" data-title="Downintro">
                    {/* OutSide Image */}
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
                        <Footer/>
                        
                        </div>
                        </div>

                        {/* FontAwesome Instagram  */}
                        <a  href="https://www.instagram.com">
                            <image className="fab fa-instagram" />
                        </a>

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