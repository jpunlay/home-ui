import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';

const StyledNavBar = styled(Navbar)`
    background-color: #000000!important; 
`;

const StyledNavBarBrand = styled(Navbar.Brand)`
    font-size: 1rem;
`;

function TopNav(props) {
    return (
        <div className="topNav">
            <StyledNavBar bg="dark" variant="dark" expand="lg">
                <StyledNavBarBrand href="/home-ui">
                    JP
                </StyledNavBarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" pullRight>
                        <Nav.Link href="#blog">BLOG</Nav.Link>
                        <Nav.Link href="#resume">RESUME</Nav.Link>
                        <Nav.Link href="#feedback">FEEDBACK</Nav.Link>
                        <Nav.Link href="#repo">REPO</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </StyledNavBar>
        </div>
    );
}
export default TopNav;