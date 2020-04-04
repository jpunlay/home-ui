import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import styled from "styled-components";
import { MDBView, MDBMask } from "mdbreact";
import "holderjs";
import About from "./About";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
import Articles from "./Articles";
import Life from "./Life";
import ProjectsDescription from "./ProjectsDescription";
import ph from "./../images/background.jpg";

const StyledCard = styled(Card)`
  background-color: #000000 !important;
  height: 100% !important;
  border: 2px solid white; // temp for visualisation
`;

function MainCard(props) {
  const [isProjectOpen, setProjectView] = useState(false);

  if (!isProjectOpen) {
    return (
      <div className="mainCards">
        <CardGroup>
          <StyledCard
            bg="dark"
            text="light"
            onClick={() => setProjectView(true)}
          >
            <Projects></Projects>
          </StyledCard>
          <Hobbies></Hobbies>
        </CardGroup>
        <CardGroup>
          <About></About>
          <Articles></Articles>
          <Life></Life>
        </CardGroup>
      </div>
    );
  } else {
    return (
      <StyledCard bg="dark" text="light" onClick={() => setProjectView(false)}>
        <ProjectsDescription></ProjectsDescription>
      </StyledCard>
    );
  }
}
export default MainCard;
