import React from "react";
import styled from 'styled-components';
import tri from './../../images/tri.jpg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    opacity: 0.8;
`;

function Hobbies(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <div class="bg-image hover-overlay hover-zoom hover-shadow ripple">
                <StyledCardImg variant="top" src={tri} />
                <div class="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                           display: 'flex',
                                           justifyContent: 'center',
                                           alignItems: 'center'}}>
                    <p>{"> Hobbies"}</p>
                </div>
            </div>
        </StyledCard>
    )
}

export default Hobbies;