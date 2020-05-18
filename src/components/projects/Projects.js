import React, { useState } from "react";
import styled from "styled-components";
import { MDBView, MDBMask } from "mdbreact";
import ph from "./../../images/background.jpg";
import Card from "react-bootstrap/Card";

const StyledCard = styled(Card)`
    background-color: #000000!important;
    height: 100%!important;
    border: 2px solid white; // temp for visualisation
`;

function Projects(props) {
  return (
    <StyledCard bg="dark" text="light" onClick={props.onClick}>
      <MDBView hover zoom>
        <Card.Img variant="top" src={ph} />
        <MDBMask className="flex-center">
          <p className="grey-text">{"> Hello World"}</p>
        </MDBMask>
      </MDBView>
    </StyledCard>
  );
}

export default Projects;
