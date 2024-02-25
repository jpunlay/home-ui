import React from "react";
import styled from 'styled-components';
import bear from './../../images/bear.jpeg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    opacity: 0.7;
    padding: 2.5em 2em;
    height: 85%;
`;

function About(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <div class="bg-image hover-overlay hover-zoom hover-shadow ripple">
                <StyledCardImg variant="top" src={bear} />
                <div  class="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center'}}>
                    <p>{"> about"}</p>
                </div>
            </div>
        </StyledCard>
    )
}

export default About;