import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import FollowAt from "react-social-media-follow";

const StyledNavBar = styled(Navbar)`
    background-color: #000000!important;
    font-size: .85rem;
`;

const StyledNavBarBrand = styled(Navbar.Brand)`
    font-size: .85rem;
`;

const repository = [
    'https://github.com/jpunlay/home-ui'
];

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
                        <Nav.Link href="/dope">BLOG</Nav.Link>
                        <Nav.Link href="#resume">RESUME</Nav.Link>
                        <Nav.Link href="#feedback">FEEDBACK</Nav.Link>
                        <Nav.Link href="#repo"><FollowAt links = {repository} color="grey" hoverColor="white" iconSize="1" /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </StyledNavBar>
        </div>
    );
}
export default TopNav;