import React from "react";
import styled from 'styled-components';
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
            <div className='bg-image hover-zoom'>
                <StyledCardImg variant="top" src={alpaca} />
                <div className='bg-image'>
                    <p className="white-text" >life(home)</p>
                </div>
            </div>
        </StyledCard>
    )
}

export default Life;