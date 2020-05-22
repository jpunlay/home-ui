import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopNav from './components/TopNav';
import MainCard from './components/MainCard';

const StyledMainCard = styled.div`
    background-color: #000000!important;
    padding: 4em 2em;
`;

const StyledTopBox = styled.div`
    background-color: #000000!important;
    margin: 0!important;
`;

const StyledTopBoxPar = styled.p`
    margin: 0!important;
    text-align: center;
    line-height: 400px;
    color: #555555;
`;

function App() {
  return (
    <BrowserRouter>
      <Route path="/home-ui">
        <div className="App">
          <TopNav></TopNav>
          <StyledTopBox className="topBox">
            <StyledTopBoxPar>
            </StyledTopBoxPar>
          </StyledTopBox>
          <StyledMainCard>
            <MainCard></MainCard>
          </StyledMainCard>
        </div>
      </Route>
    </BrowserRouter>

  );
}

export default App;
