import React from "react";
import styled from "styled-components";
import { MDBView, MDBMask } from "mdbreact";
import bulb from "./../../images/bulb.jpg";
import Card from "react-bootstrap/Card";

const StyledCard = styled(Card)`
    background-color: black !important;
`;

const StyledCardImg = styled(Card.Img)`
    padding: 15px;
`;

function Projects(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <MDBView hover zoom>
                <StyledCardImg variant="top" src={bulb} />
                <MDBMask className="flex-center">
                    <p className="white-text">{"> Hello World"}</p>
                </MDBMask>
            </MDBView>
        </StyledCard>
    );
}

export default Projects;