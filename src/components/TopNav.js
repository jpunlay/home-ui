import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled from 'styled-components';
import FollowAt from "react-social-media-follow";
import Resume from "./Resume";
import Feedback from './Feedback';

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
        // Resume
        this.showResume = this.showResume.bind(this);
        this.hideResume = this.hideResume.bind(this);
        this.state = { showResume: false };
        // Feedback
        this.showFeedback = this.showFeedback.bind(this);
        this.hideFeedback = this.hideFeedback.bind(this);
        this.state = { showFeedback: false };
    }

    showResume() { this.setState({ showResume: true }) }

    hideResume() { this.setState({ showResume: false }) }

    showFeedback() { this.setState({ showFeedback: true }) }

    hideFeedback() { this.setState({ showFeedback: false }) }

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
                            <Nav.Link href="#resume" onClick={() => this.showResume()}>resume</Nav.Link>
                            <Nav.Link href="#feedback" onClick={() => this.showFeedback()}>feedback</Nav.Link>
                            <div style={{padding: '.5rem'}}>
                                <FollowAt links={repository} color="grey" hoverColor="white" iconSize="1"/>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </StyledNavBar>

                {/* Resume popup modal */}
                <Resume showResume={this.state.showResume} hideResume={this.hideResume}></Resume>
                <Feedback showFeedback={this.state.showFeedback} hideFeedback={this.hideFeedback}></Feedback>
            </div>
        );
    }
}
export default TopNav;