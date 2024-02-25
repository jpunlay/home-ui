import React from "react";
import styled from 'styled-components';
import alpaca from './../../images/alpaca.jpeg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    opacity: 0.7;
    padding: 2em;
    height: 90%;
`;

function Life(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <div class="bg-image hover-overlay hover-zoom hover-shadow ripple">
                <StyledCardImg variant="top" src={alpaca} />
                <div class="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                           display: 'flex',
                                           justifyContent: 'center',
                                           alignItems: 'center'}}>
                    <p>{"> life"}</p>
                </div>
            </div>
        </StyledCard>
    )
}

export default Life;