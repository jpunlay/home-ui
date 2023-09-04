import React from "react";
import styled from 'styled-components';
import tri from './../../images/tri.jpg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    opacity: 0.7;
    height: 85%;
`;

function Hobbies(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <div className='bg-image hover-zoom'>
                <StyledCardImg variant="top" src={tri} />
                <div className='bg-image'>
                    <p className="white-text">{"> Hobbies"}</p>
                </div>
            </div>
        </StyledCard>
    )
}

export default Hobbies;