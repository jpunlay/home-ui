import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import styled from 'styled-components';
import tri from './../images/tri.jpg';
import ph from './../images/background.jpg';
import { MDBView, MDBMask } from "mdbreact";
import 'holderjs';

const StyledCard = styled(Card)`
    background-color: #000000!important;
    height: 100%!important;
    border: 2px solid white; // temp for visualisation
`;
function MainCards(props) {
    return (
        <div className="mainCards">
            <CardGroup>
                <StyledCard bg="dark" text="light">
                    <MDBView hover zoom>
                        <Card.Img variant="top" src={ph}/>
                        <MDBMask className="flex-center">
                            <p className="white-text" >{"> Hello World"}</p>
                        </MDBMask>
                    </MDBView>
                </StyledCard>
                <StyledCard bg="dark" text="light">
                    <MDBView hover zoom>
                        <Card.Img variant="top" src={tri}/>
                        <MDBMask className="flex-center">
                            <p className="white-text">Hobbies</p>
                        </MDBMask>
                    </MDBView>
                </StyledCard>
            </CardGroup>
            <CardGroup>
                <StyledCard bg="dark" text="light">
                    <MDBView hover zoom>
                        <Card.Img variant="top" src={ph}/>
                        <MDBMask className="flex-center">
                            <p className="white-text">About</p>
                        </MDBMask>
                    </MDBView>
                </StyledCard>
                <StyledCard bg="dark" text="light">
                    <MDBView hover zoom>
                        <Card.Img variant="top" src={ph}/>
                        <MDBMask className="flex-center">
                            <p className="white-text">About</p>
                        </MDBMask>
                    </MDBView>
                </StyledCard>
                <StyledCard bg="dark" text="light">
                    <MDBView hover zoom>
                        <Card.Img variant="top" src={ph}/>
                        <MDBMask className="flex-center">
                            <p className="white-text">Home</p>
                        </MDBMask>
                    </MDBView>
                </StyledCard>
            </CardGroup>
        </div>
    );
}
export default MainCards;