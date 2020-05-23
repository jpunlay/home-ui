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
        this.state = { showResume: false };
    }

    handleShow() {
        console.log("show");
        this.setState({ showResume: true });
    }
    handleClose() {
        console.log("close");
        this.setState({ showResume: false });
    }

    render() {
        const showResume = this.state.showResume;

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

                {/* Resume popup modal */}
                <Modal size="xl" show={showResume} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Jesus Punlay Resume</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                        </p>
                        <h2>Education</h2>
                        <p>
                            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                            ipsam atque a dolores quisquam quisquam adipisci possimus
                            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                            deleniti rem!
                        </p>
                    </Modal.Body>
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