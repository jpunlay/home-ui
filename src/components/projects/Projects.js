import React, { useState } from "react";
import styled from "styled-components";
import { MDBView, MDBMask } from "mdbreact";
import bulb from "./../../images/bulb.jpg";
import Card from "react-bootstrap/Card";

function Projects(props) {

    const StyledCard = styled(Card)`
        background-color: black !important;
    `;

    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <MDBView hover zoom>
                <Card.Img variant="top" src={bulb} />
                <MDBMask className="flex-center">
                    <p className="white-text">{"> Hello World"}</p>
                </MDBMask>
            </MDBView>
        </StyledCard>
    );
}

export default Projects;
