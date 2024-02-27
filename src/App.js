import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import { TopNav } from './components/TopNav';
import { BottomNav } from './components/BottomNav';
import { MainCard } from './components/MainCard.js';

const StyledApp = styled.div`
    background-color: #000000!important;
    text-align: center;
    min-height: 100vh;
`;
const StyledMainCard = styled.div`
    background-color: #000000!important;
    padding: 2% 8%;
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
                    </div>} />
                </Routes>
                <BottomNav></BottomNav>
            </StyledApp>
        </BrowserRouter>
    );
}

export default App;
