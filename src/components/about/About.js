import React from "react";
import styled from 'styled-components';
import { MDBView, MDBMask } from "mdbreact";
import bear from './../../images/bear.jpeg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    opacity: 0.7;
    // border: 25px solid #000000;
    padding: 35px 25px 0;
`;

function About(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <MDBView hover zoom>
                <StyledCardImg variant="top" src={bear} />
                <MDBMask className="flex-center">
                    <p className="white-text" >about</p>
                </MDBMask>
            </MDBView>
        </StyledCard>
    )
}

export default About;