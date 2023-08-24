import React from "react";
import styled from "styled-components";
import bulb from "./../../images/bulb.jpg";
import Card from "react-bootstrap/Card";

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    height: 22rem;
`;

const Projects = (props) => {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <div className='bg-image hover-zoom'>
                <StyledCardImg variant="top" src={bulb}/>
                <div className='bg-image'>
                    <p>{"> Hello World"}</p>
                </div>
            </div>
        </StyledCard>
    );
}

export default Projects;