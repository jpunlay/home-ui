import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { Resume } from "./Resume";
import { Feedback } from './Feedback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const StyledNavBar = styled(Navbar)`
    background-color: #000000!important;
    font-size: .85rem;
    padding: 0 2rem;
`;

const StyledNavBarBrand = styled(Navbar.Brand)`
    font-size: .85rem;
`;

const repository = [
    'https://github.com/jpunlay/home-ui'
];

export function TopNav() {
    const [showResume, setShowResume] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);

    return (
        <div className="topNav">
            <StyledNavBar bg="dark" variant="dark" expand="lg">
                <StyledNavBarBrand href="/home-ui">
                    <FontAwesomeIcon icon={faCoffee}/>JP
                </StyledNavBarBrand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link>blog</Nav.Link>
                        <Nav.Link onClick={() => setShowResume(true)}>resume</Nav.Link>
                        <Nav.Link onClick={() => setShowFeedback(true)}>feedback</Nav.Link>
                        {/* <div style={{ padding: '.5rem' }}> */}
                            {/* <FollowAt links={repository} color="grey" hoverColor="white" iconSize="1" /> */}
                        {/* </div> */}
                    </Nav>
                </Navbar.Collapse>
            </StyledNavBar>

            {/* Resume popup modal */}
            <Resume showResume={showResume} onCloseClick={() => setShowResume(false)}></Resume>
            <Feedback showFeedback={showFeedback} onCloseClick={() => setShowFeedback(false)}></Feedback>
        </div>
    );
}
