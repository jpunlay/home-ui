import React from "react";
import styled from 'styled-components';
import { MDBView, MDBMask } from "mdbreact";
import tri from './../images/tri.jpg';
import Card from 'react-bootstrap/Card';

const StyledCard = styled(Card)`
    background-color: #000000!important;
    height: 100%!important;
    border: 2px solid white; // temp for visualisation
`;

function Hobbies(props) {
  return (
    <StyledCard bg="dark" text="light">
      <MDBView hover zoom>
        <Card.Img variant="top" src={tri} />
        <MDBMask className="flex-center">
          <p className="white-text">hobbies</p>
        </MDBMask>
      </MDBView>
    </StyledCard>
  )
}

export default Hobbies;