import React from "react";
import CardGroup from "react-bootstrap/CardGroup";
import "holderjs";
import About from "./about/About";
import Hobbies from "./hobbies/Hobbies";
import Projects from "./projects/Projects";
import Articles from "./articles/Articles";
import Life from "./life/Life";
import ProjectsDescription from "./projects/ProjectsDescription";
import HobbiesDescription from "./hobbies/HobbiesDescription";
import ArticlesDescription from "./articles/ArticlesDescription";
import LifeDescription from "./life/LifeDescription";
import AboutDescription from "./about/AboutDescription";
import styled from "styled-components";

class MainCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleOpenClick = this.handleOpenClick.bind(this);
        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.state = { isOpen: false };
        this.state = { openedCard: null };
    }

    handleOpenClick(openedCard) {
        this.setState({ isOpen: true });
        switch (openedCard) {
            case "project":
                this.setState({ openedCard: <ProjectsDescription onClick={this.handleCloseClick}></ProjectsDescription> });
                break;
            case "hobbies":
                this.setState({ openedCard: <HobbiesDescription onClick={this.handleCloseClick}></HobbiesDescription> });
                break;
            case "articles":
                this.setState({ openedCard: <ArticlesDescription onClick={this.handleCloseClick}></ArticlesDescription> });
                break;
            case "life":
                this.setState({ openedCard: <LifeDescription onClick={this.handleCloseClick}></LifeDescription> });
                break;
            case "about":
                this.setState({ openedCard: <AboutDescription onClick={this.handleCloseClick}></AboutDescription> });
                break;
            default:
                console.log("No card with name: " + openedCard);
        }
    }

    handleCloseClick() {
        this.setState({ isOpen: false });
    }

    render() {
        const isOpen = this.state.isOpen;
        const openedCard = this.state.openedCard;
        let main;

        const StyledMainCard = styled.div`
            background-color: black;
        `;

        if (!isOpen) {
            main =
                <StyledMainCard className="mainCard">
                    <CardGroup>
                        <Projects onClick={() => this.handleOpenClick('project')}></Projects>
                        <Hobbies onClick={() => this.handleOpenClick('hobbies')}></Hobbies>
                    </CardGroup>
                    <CardGroup>
                        <About onClick={() => this.handleOpenClick('about')}></About>
                        <Articles onClick={() => this.handleOpenClick('articles')}></Articles>
                        <Life onClick={() => this.handleOpenClick('life')}></Life>
                    </CardGroup>
                </StyledMainCard>;
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
