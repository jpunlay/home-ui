import React, { useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
import "holderjs";
import About from "./About";
import Hobbies from "./Hobbies";
import Projects from "./Projects";
import Articles from "./Articles";
import Life from "./Life";
import ProjectsDescription from "./ProjectsDescription";

class MainCard extends React.Component {
  constructor(props) {
    super(props);
    this.handleOpenClick = this.handleOpenClick.bind(this);
    this.state = { isOpen: false };
    this.state = { openedCard: null };
  }

  handleOpenClick(openedCard) {
    this.setState({ isOpen: true });
    switch (openedCard) {
      case "project":
        this.setState({ openedCard: <ProjectsDescription></ProjectsDescription> });
        break;
      case "hobbies":
        // code block
        break;
      default:
      // code block
    }
  }

  render() {
    const isOpen = this.state.isOpen;
    const openedCard = this.state.openedCard;
    let main;

    if (!isOpen) {
      main =
        <div className="mainCard">
          <CardGroup>
            <Projects onClick={() => this.handleOpenClick('project')}></Projects>
            <Hobbies onClick={this.handleOpenClick('hobbies')}></Hobbies>
          </CardGroup>
          <CardGroup>
            <About onClick={this.handleOpenClick('about')}></About>
            <Articles onClick={this.handleOpenClick('articles')}></Articles>
            <Life onClick={this.handleOpenClick('life')}></Life>
          </CardGroup>
        </div>;
    } else {
      main =
        <div className="descriptionCard">
          {openedCard}
        </div>;
    }

    return (
      <div>
        {main}
      </div>
    );
  }
}
export default MainCard;
