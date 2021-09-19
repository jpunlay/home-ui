import React from "react";
import styled from 'styled-components';
import { MDBView, MDBMask } from "mdbreact";
import tri from './../../images/tri.jpg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    opacity: 0.7;
    padding: 15px;
`;

function Hobbies(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <MDBView hover zoom>
                <StyledCardImg variant="top" src={tri} />
                <MDBMask className="flex-center">
                    <p className="white-text">Hobbies</p>
                </MDBMask>
            </MDBView>
        </StyledCard>
    )
}

export default Hobbies;