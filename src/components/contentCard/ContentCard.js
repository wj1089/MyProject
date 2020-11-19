import React from 'react';
import './ContentCard.css'



function ContentCard(props) {

    console.log(props);
    // 

    
    return (
                <div className="WP_sectionimgs">
                   
                    <img className="WP_imgSize" src={props.contentInfor.imgUrl}/>
                    
                    <div className="WP_contentText">
                        <h4>Name : {props.contentInfor.name}</h4>
                        <p>Text : {props.contentInfor.text}</p>
                    </div>

                </div>
    );
};

export default ContentCard;