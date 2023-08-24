import React from "react";
import styled from "styled-components";
import bulb from "./../../images/bulb.jpg";
import Card from "react-bootstrap/Card";

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    padding: 15px;
`;

const Projects = (props) => {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <div className='bg-image hover-zoom'>
                <StyledCardImg variant="top" src={bulb} />
                <div className='bg-image'>
                    <p className="white-text" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>{"> Hello World"}</p>
                </div>
            </div>
        </StyledCard>
    );
}

export default Projects;