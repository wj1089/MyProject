import React from 'react';
import downlogo from "../../resource/illu_3.png"
import './Navigation.css'
const DownImg = () => {
    return (
        <>
            <span>
                <a >
                    <img src={downlogo}  className="fixImg"  alt= {"아이그레 다운로드"} />
                </a>
            </span>
        </>
    );
};

export default DownImg;