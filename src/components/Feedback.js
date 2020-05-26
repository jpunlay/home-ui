import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';


class Feedback extends React.Component {
    constructor(props) {
        super(props);
    }

    openIssue = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        const headers = {
            "Content-Type": "application/json",
            "Authorization": "token TOKENHERE"
        }

        const data = {
            "title": form.issueTitle.value,
            "body": form.issueBody.value
        }

        axios.post(`https://api.github.com/repos/jpunlay/home-ui/issues`, data, {
            headers: headers
        })
        .then(res => {
            console.log(res);
            console.log(res.data);
            this.props.hideFeedback();
        })
    };


    render() {
        return (
            <>
                <Modal size="s" show={this.props.showFeedback} onHide={this.props.hideFeedback}>
                    <Modal.Body>
                        <Form onSubmit={this.openIssue}>
                            <Form.Group controlId="issueTitle">
                                <Form.Label>Issue Summary</Form.Label>
                                <Form.Control tas="textarea" />
                            </Form.Group>
                            <Form.Group controlId="issueBody">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <div style={{ float: 'right' }}>
                                <Button variant="light" onClick={this.props.hideFeedback}>
                                    Close
                                </Button>
                                <Button variant="dark" type="submit">
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Modal.Body>
                </Modal>

            </>
        )
    }
}

export default Feedback