import React, { useState } from "react";
import CardGroup from "react-bootstrap/CardGroup";
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

const StyledMainCard = styled.div`
    background-color: black!important;
`;

export function MainCard() {
    const [isCardOpen, setIsCardOpen] = useState(false)
    const [openedCard, setOpenedCard] = useState(null)

    function handleOpenClick(openedCard) {
        setIsCardOpen(true)
        switch (openedCard) {
            case "project":
                setOpenedCard(<ProjectsDescription onClick={() => setIsCardOpen(false)}></ProjectsDescription>);
                break;
            case "hobbies":
                setOpenedCard(<HobbiesDescription onClick={() => setIsCardOpen(false)}></HobbiesDescription>);
                break;
            case "articles":
                setOpenedCard(<ArticlesDescription onClick={() => setIsCardOpen(false)}></ArticlesDescription>);
                break;
            case "life":
                setOpenedCard(<LifeDescription onClick={() => setIsCardOpen(false)}></LifeDescription>);
                break;
            case "about":
                setOpenedCard(<AboutDescription onClick={() => setIsCardOpen(false)}></AboutDescription>);
                break;
            default:
                console.log("No card with name: " + openedCard);
        }
    }

    let main;

    if (!isCardOpen) {
        main =
            <StyledMainCard className="mainCard">
                <CardGroup style={{paddingBottom:"4%"}}>
                    <Projects onClick={() => handleOpenClick('project')}></Projects>
                    <Hobbies onClick={() => handleOpenClick('hobbies')}></Hobbies>
                </CardGroup>
                <CardGroup>
                    <About onClick={() => handleOpenClick('about')}></About>
                    <Articles onClick={() => handleOpenClick('articles')}></Articles>
                    <Life onClick={() => handleOpenClick('life')}></Life>
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
