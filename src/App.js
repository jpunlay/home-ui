import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNav from './components/TopNav';
import MainCard from './components/MainCard';
import FollowAt from "react-social-media-follow";

const StyledMainCard = styled.div`
    background-color: #000000!important;
    padding: 1em 2em;
`;

const StyledTopBox = styled.div`
    background-color: #000000!important;
    margin: 0!important;
`;

const StyledTopBoxPar = styled.p`
    margin: 0!important;
    text-align: center;
    // line-height: 400px;
    color: #555555;
`;

const links = [
    'https://www.linkedin.com/in/jesus-punlay-068098110/',
    'https://twitter.com/jesuspunlay',
    'https://www.facebook.com/jesuspunlay',
    'https://www.youtube.com/jesuspunlay',
    'https://www.instagram.com/jesuspunlay/',
    'https://github.com/jpunlay'
];

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <TopNav></TopNav>
                <Route path="/home-ui">
                    <StyledTopBox className="topBox">
                        <StyledTopBoxPar>
                        </StyledTopBoxPar>
                    </StyledTopBox>
                    <StyledMainCard>
                        <MainCard></MainCard>
                    </StyledMainCard>
                    <FollowAt links = {links} color="grey" hoverColor="white" iconSize="1" />
                </Route>
            </div>
        </BrowserRouter>
    );
}

export default App;
