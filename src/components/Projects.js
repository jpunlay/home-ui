import React, { useState } from "react";
import styled from "styled-components";
import { MDBView, MDBMask } from "mdbreact";
import ph from "./../images/background.jpg";
import Card from "react-bootstrap/Card";

function Projects() {
  return (
    <MDBView hover zoom>
      <Card.Img variant="top" src={ph} />
      <MDBMask className="flex-center">
        <p className="grey-text">{"> Hello World"}</p>
      </MDBMask>
    </MDBView>
  );
}

export default Projects;
