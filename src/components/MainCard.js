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

class MainCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenClick = this.handleOpenClick.bind(this);
    this.state = { isOpen: false };
  }

  handleOpenClick() {
    this.setState({ isOpen: true });
    console.log(this.isOpen)
  }

  render() {
    const isOpen = this.state.isOpen;
    let main;

    if (!isOpen) {
      main =
        <div className="mainCards">
          <CardGroup>
            <Projects onClick={this.handleOpenClick}></Projects>
            <Hobbies onClick={this.handleOpenClick}></Hobbies>
          </CardGroup>
          <CardGroup>
            <About onClick={this.handleOpenClick}></About>
            <Articles onClick={this.handleOpenClick}></Articles>
            <Life onClick={this.handleOpenClick}></Life>
          </CardGroup>
        </div>;
    } else {
      main =
        <StyledCard bg="dark" text="light">
          <ProjectsDescription></ProjectsDescription>
        </StyledCard>;
    }

    return (
      <div>
        {main}
      </div>
    );
  }

  // } else {
  //   return (
  //     <StyledCard bg="dark" text="light" onClick={() => setProjectView(false)}>
  //       <ProjectsDescription></ProjectsDescription>
  //     </StyledCard>
  //   );
  // }
}
export default MainCard;
