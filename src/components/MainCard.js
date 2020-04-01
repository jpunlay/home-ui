import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styled from 'styled-components';
import tri from './../images/tri.jpg';
import ph from './../images/background.jpg';
import { MDBView, MDBMask } from "mdbreact";
import 'holderjs';
import About from './About';
import Hobbies from './Hobbies';
import Projects from './Projects';
import Articles from './Articles';
import Life from './Life';

const StyledCard = styled(Card)`
    background-color: #000000!important;
    height: 100%!important;
    border: 2px solid white; // temp for visualisation
`;

function MainCard(props) {
    return (
        <div className="mainCards">
            <CardGroup>
                <Projects></Projects>
                <Hobbies></Hobbies>
            </CardGroup>
            <CardGroup>
                <About></About>
                <Articles></Articles>
                <Life></Life>
            </CardGroup>
        </div>
    );
}
export default MainCard;