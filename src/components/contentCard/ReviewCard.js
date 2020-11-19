import React from 'react';

function ReviewCard (props)  {
    console.log(props)
    return (
            <div className="inSide_slide">
                <div className="slide_img">
                    <img src={props.reviewInfor.imgUrl} />
                </div>

                <div className="slide_icon">
                    <p>이모티콘</p>
                </div>

                <div className="slide_text">
                    <p>Review : {props.reviewInfor.review}</p>
                </div>
            </div>
    );
};

export default ReviewCard;