import React from "react";
import styled from 'styled-components';
import { MDBView, MDBMask } from "mdbreact";
import tri from './../../images/tri.jpg';
import Card from 'react-bootstrap/Card';

function Hobbies(props) {
  return (
    <Card bg="dark" text="light" onClick={props.onClick}>
      <MDBView hover zoom>
        <Card.Img variant="top" src={tri} />
        <MDBMask className="flex-center">
          <p className="grey-text">H obbies</p>
        </MDBMask>
      </MDBView>
    </Card>
  )
}

export default Hobbies;