import React, { useState } from "react";
import styled from "styled-components";
import { MDBView, MDBMask } from "mdbreact";
import bulb from "./../../images/bulb.jpg";
import Card from "react-bootstrap/Card";

function Projects(props) {
  return (
    <Card bg="dark" text="light" onClick={props.onClick}>
      <MDBView hover zoom>
        <Card.Img variant="top" src={bulb} />
        <MDBMask className="flex-center">
          <p className="white-text">{"> Hello World"}</p>
        </MDBMask>
      </MDBView>
    </Card>
  );
}

export default Projects;
