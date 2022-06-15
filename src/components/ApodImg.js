import React from "react";

const ApodImg = (props) => {
    return (
        <div className="apod-image-container">
            <h3>{props.data.title}</h3>
            <p>{props.data.date}</p>
            <img src={props.data.hdurl}/>
            <p>{props.data.explanation}</p>
        </div>
    )
}

export default ApodImg;