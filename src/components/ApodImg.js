import React from "react";
import styled, { keyframes } from 'styled-components';

const kf = keyframes`
  100% {
    opacity: 1;
    transform: scale(1) rotateZ(0);
  }
`

const StyledApod = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5%;
    align-items: center;
    opacity: 0;
    transform: scale(2) rotateZ(180deg);
    animation: ${kf} 0.5s ease-in-out forwards;

    background-color: ${props => props.theme.primaryColor};

    img {
        max-width: 50%;
    }

    p {
        background-color: ${props => props.theme.primaryColor};
        color: ${props => props.theme.secondaryColor}
    }
`

const ApodImg = (props) => {
    return (
        <StyledApod className="apod-image-container">
            <h3>{props.data.title}</h3>
            <p>{props.data.date}</p>
            <img src={props.data.hdurl}/>
            <p>{props.data.explanation}</p>
        </StyledApod>
    )
}

export default ApodImg;