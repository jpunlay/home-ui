import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import FollowAt from "react-social-media-follow";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
        this.state = { show: false };
    }

    handleShow() {
        console.log("show");
        this.setState({ show: true });
    }
    handleClose() {
        console.log("close");
        this.setState({ show: false });
    }

    render() {
        const show = this.state.show;

        return (
            <div className="topNav">
                <StyledNavBar bg="dark" variant="dark" expand="lg">
                    <StyledNavBarBrand href="/home-ui">
                        JP
                    </StyledNavBarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto" pullRight>
                            <Nav.Link href="/dope">blog</Nav.Link>
                            <Nav.Link href="#resume" onClick={this.handleShow}>resume</Nav.Link>
                            <Nav.Link href="#feedback">feedback</Nav.Link>
                            <Nav.Link href="#repo"><FollowAt links={repository} color="grey" hoverColor="white" iconSize="1" /></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </StyledNavBar>
                <Modal show={show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                    </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                    </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
export default TopNav;