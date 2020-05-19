import React from "react"
import styled from 'styled-components';
import { MDBView, MDBMask } from "mdbreact";
import ph from './../../images/ph1.jpeg';
import Card from 'react-bootstrap/Card';

function Articles(props) {
  return (
    <Card bg="dark" text="light">
      <MDBView hover zoom>
        <Card.Img variant="top" src={ph} />
        <MDBMask className="flex-center">
          <p className="white-text" >{"articles"}</p>
        </MDBMask>
      </MDBView>
    </Card>
  )
}

export default Articles;