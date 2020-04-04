import React from 'react';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import styled from 'styled-components';

import Hobbies from './components/Hobbies';
import Projects from './components/Projects';
import Articles from './components/Articles';
import About from './components/About';
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
      <div className="App">
        <TopNav></TopNav>
        <StyledTopBox className="topBox">
          <StyledTopBoxPar>
          </StyledTopBoxPar>
        </StyledTopBox>
        {/* <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        /> */}
        <StyledMainCard>
          <MainCard></MainCard>
        </StyledMainCard>

        {/* <div className="filler" style={{ height: '200rem'}}></div> */}


        {/* Set up the Router */}
        {/* <Route exact path="/" component={Projects} />
        <Route path="/articles" component={Articles} />
        <Route path="/hobbies" component={Hobbies} />
        <Route path="/about" component={About} />

        <div className="navigation">
          <div className="navigation-sub">
            <Link to="/" className="item">Projects</Link>
            <Link to="/articles" className="item">Articles</Link>
            <Link to="/hobbies" className="item">Hobbies</Link>
            <Link to="/about" className="item">About</Link>
          </div>
        </div> */}
      </div>
    </BrowserRouter>

  );
}

export default App;
