import React from 'react';
import '../main/Landing.css'
import Landing from '../main/Landing'
import logo from '../../resource/logo.png'
import { useHistory } from 'react-router-dom';

const MenuBar = () => {
const history =useHistory();

    return (
        <>
                <header className="nav_menubar">
                    <div className="logoimg"  onClick={()=>{history.push('/Landing')}}>
                        <img src={logo} className="logo"/>
                    </div>

                    <ul className="nav_menu">
                        <li><a className="one">브랜드소개<a></a></a></li>
                       
                        <li><a className="two" onClick={()=>{history.push('/WidePage')}}>상품보기</a></li>
                        
                        {/* <li><a>Delivery</a></li>
                        <li><a>Comment</a></li>
                        <li><a>News</a></li> */}
                        {/* className="introMunu"
                        className="productMunu" */}
                    </ul>
            </header>
        </>
    );
};

export default MenuBar;