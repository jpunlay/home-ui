import React from "react"
import styled from 'styled-components';
import ph from './../../images/ph1.jpeg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    padding: 2em;
    height: 85%;
`;

function Articles(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <div class="bg-image hover-overlay hover-zoom hover-shadow ripple">
                <StyledCardImg variant="top" src={ph} />
                <div class="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                           display: 'flex',
                                           justifyContent: 'center',
                                           alignItems: 'center'}}>
                    <p>{"> articles"}</p>
                </div>
            </div>
        </StyledCard>
    )
}

export default Articles;