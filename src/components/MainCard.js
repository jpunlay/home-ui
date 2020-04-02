import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styled from 'styled-components';
import { MDBView, MDBMask } from "mdbreact";
import 'holderjs';
import About from './About';
import Hobbies from './Hobbies';
import Projects from './Projects';
import Articles from './Articles';
import Life from './Life';

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