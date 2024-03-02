import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import { Resume } from "./Resume";
import { Feedback } from './Feedback';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const StyledNavBar = styled(Navbar)`
    background-color: #000000!important;
    font-size: .85rem;
    padding: 1rem 2rem;
`;

const StyledNavBarBrand = styled(Navbar.Brand)`
    font-size: .85rem;
`;

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

                    </Nav>
                    {/* Repository */}
                    <a style={{color: "#999999", padding: "1vh"}} href="https://github.com/jpunlay/home-ui" role="button">
                        <i class="fab fa-github fa-lg"></i>
                    </a>
                </Navbar.Collapse>
            </StyledNavBar>

            {/* Resume popup modal */}
            <Resume showResume={showResume} onCloseClick={() => setShowResume(false)}></Resume>
            <Feedback showFeedback={showFeedback} onCloseClick={() => setShowFeedback(false)}></Feedback>
        </div>
    );
}
