import React from "react";
import styled from 'styled-components';
import bear from './../../images/bear.jpeg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    opacity: 0.7;
    padding: 35px 25px 0;
`;

function About(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <StyledCardImg variant="top" src={bear} />
            <p className="white-text" >about</p>
        </StyledCard>
    )
}

export default About;