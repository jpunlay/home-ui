import React from "react";
import styled from "styled-components";
import { MDBView, MDBMask } from "mdbreact";
import sign from "./../../images/sign.jpg";
import Card from "react-bootstrap/Card";

const StyledText = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: justify;
    text-justify: inter-word;
`;

const StyledCard = styled(Card)`
    background-color: black !important;
    height: 45vw;
    display: block;
    width: 100%;
`;

const StyledImage = styled(Card.Img)`
    height: 100%!important;
`;

function ProjectsDescription(props) {
    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <MDBView>
                <StyledImage variant="top" src={sign} />
                <MDBMask>
                    <StyledText>
                        <h2>Projects</h2>
                        <code className="grey-text">
                            This is a block of code: 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </code>

                        <br/>
                        <br/>

                        <code className="grey-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                        </code>
                    </StyledText>
                </MDBMask>
            </MDBView>
        </StyledCard>
    );
}

export default ProjectsDescription;
