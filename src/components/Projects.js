import React, { useState } from "react"
import styled from 'styled-components';
import { MDBView, MDBMask } from "mdbreact";
import ph from './../images/background.jpg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: #000000!important;
    height: 100%!important;
    border: 2px solid white; // temp for visualisation
`;

function Projects(props) {

  const [isProjectOpen, setView] = useState(false);

  if(isProjectOpen) {
    return ( 
      <StyledCard bg="dark" text="light" onClick={() => setView(false)}>
        <MDBView>
          <Card.Img variant="top" src={ph} />
          <MDBMask>
            <p className="grey-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="grey-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p className="grey-text" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </MDBMask>
        </MDBView>
      </StyledCard>
    )
  } else {
    return (
      <StyledCard bg="dark" text="light" onClick={() => setView(true)}>
        <MDBView hover zoom>
          <Card.Img variant="top" src={ph} />
          <MDBMask className="flex-center">
            <p className="grey-text" >{"> Hello World"}</p>
          </MDBMask>
        </MDBView>
      </StyledCard>
    )
  }
}

export default Projects;