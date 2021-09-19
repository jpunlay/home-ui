import React from "react";
import styled from 'styled-components';
import { MDBView, MDBMask } from "mdbreact";
import alpaca from './../../images/alpaca.jpeg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    opacity: 0.7;
    padding: 15px;
`;

function Life(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <MDBView hover zoom>
                <StyledCardImg variant="top" src={alpaca} />
                <MDBMask className="flex-center">
                    <p className="white-text" >life(home)</p>
                </MDBMask>
            </MDBView>
        </StyledCard>
    )
}

export default Life;