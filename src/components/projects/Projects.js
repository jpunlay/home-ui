import React from "react";
import styled from "styled-components";
import bulb from "./../../images/bulb.jpg";
import Card from "react-bootstrap/Card";

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    height: 90%;
    width: 100%;
`;

const Projects = (props) => {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <div class="bg-image hover-overlay hover-zoom hover-shadow ripple">
                <StyledCardImg variant="top" src={bulb}/>
                <div class="hover-overlay">
                  <div class="mask" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                             display: 'flex',
                                             justifyContent: 'center',
                                             alignItems: 'center'}}>
                    <p>{"> Hello World"}</p>
                  </div>
                </div>
            </div>
        </StyledCard>
    );
}

export default Projects;