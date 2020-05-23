import React from "react";
import styled from 'styled-components';
import { MDBView, MDBMask } from "mdbreact";
import tri from './../../images/tri.jpg';
import Card from 'react-bootstrap/Card';

function Hobbies(props) {

    const StyledCard = styled(Card)`
      background-color: black !important;
    `;

    return (
        <StyledCard bg="dark" text="light" onClick={props.onClick}>
            <MDBView hover zoom>
                <Card.Img variant="top" src={tri} />
                <MDBMask className="flex-center">
                    <p className="white-text">Hobbies</p>
                </MDBMask>
            </MDBView>
        </StyledCard>
    )
}

export default Hobbies;