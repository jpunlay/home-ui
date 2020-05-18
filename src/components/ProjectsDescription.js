import React, { useState } from "react";
import styled from "styled-components";
import { MDBView, MDBMask } from "mdbreact";
import sign from "./../images/sign.jpg";
import Card from "react-bootstrap/Card";

const StyledCard = styled(Card)`
    background-color: #000000!important;
    height: 100%!important;
    border: 2px solid white; // temp for visualisation
`;

const StyledText = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  // margin-right: -50%;
  transform: translate(-50%, -50%)
`;

function ProjectsDescription(props) {
  return (
    <StyledCard bg="dark" text="light" onClick={props.onClick}>

      <MDBView>
        <Card.Img variant="top" src={sign} />
        <MDBMask>
          <StyledText>
            <p className="grey-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
          </p>
            <p className="grey-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
          </p>
            <p className="grey-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </StyledText>
        </MDBMask>
      </MDBView>
    </StyledCard>
  );
}

export default ProjectsDescription;
