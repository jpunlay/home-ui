import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import FollowAt from "react-social-media-follow";
import Resume from "./Resume";

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

class TopNav extends React.Component {
    constructor(props) {
        super(props);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = { showResume: false };
    }

    handleShow() {
        this.setState({ showResume: true });
    }
    handleClose() {
        this.setState({ showResume: false });
    }

    render() {
        return (
            <div className="topNav">
                <StyledNavBar bg="dark" variant="dark" expand="lg">
                    <StyledNavBarBrand href="/home-ui">
                        JP
                    </StyledNavBarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href="/dope">blog</Nav.Link>
                            <Nav.Link href="#resume" onClick={() => this.handleShow()}>resume</Nav.Link>
                            <Nav.Link href="#feedback">feedback</Nav.Link>
                            <div style={{padding: '.5rem'}}>
                                <FollowAt links={repository} color="grey" hoverColor="white" iconSize="1"/>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </StyledNavBar>

                {/* Resume popup modal */}
                <Resume showResume={this.state.showResume} handleClose={this.handleClose}></Resume>
            </div>
        );
    }
}
export default TopNav;