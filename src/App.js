import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import { TopNav } from './components/TopNav';
import { MainCard } from './components/MainCard.js';

const StyledApp = styled.div`
    background-color: #000000!important;
    text-align: center;
    min-height: 100vh;
`;
const StyledMainCard = styled.div`
    background-color: #000000!important;
    padding: 1em 8em;
    min-height: 100%!important;
`;

const StyledTopBox = styled.div`
    background-color: #000000!important;
    margin: 0!important;
`;

const StyledTopBoxPar = styled.p`
    margin: 0!important;
    text-align: center;
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

function App () {
    return (
        <BrowserRouter>
            <StyledApp>
                <TopNav></TopNav>
                <Routes>
                    <Route path="/home-ui" element={
                        <div>
                            <StyledTopBox className="topBox">
                                <StyledTopBoxPar>
                                </StyledTopBoxPar>
                            </StyledTopBox>
                            <StyledMainCard>
                                <MainCard></MainCard>
                            </StyledMainCard>
                                                    {/* <FollowAt links = {links} color="grey" hoverColor="white" iconSize="1" /> */}
                            </div>} />
                </Routes>
            </StyledApp>
        </BrowserRouter>
    );
}

export default App;
