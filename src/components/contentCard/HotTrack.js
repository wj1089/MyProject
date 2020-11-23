import React from 'react';
import './ContentCard.css'

const HotTrack = (props) => {
    return (
             <div className="HT_sectionimgs">
                   
                   <img className="HT_imgSize" src={props.contentInfor.imgUrl}/>
                   
                   <div className="HT_contentText">
                       <h4>Name : {props.contentInfor.name}</h4>
                       <p>Text : {props.contentInfor.text}</p>
                   </div>

               </div>
    );
};

export default HotTrack;