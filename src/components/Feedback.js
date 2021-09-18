import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

export function Feedback(props) {

    function openIssue(event) {
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
        }).finally(props.onCloseClick())
    };

    return (
        <>
            <Modal size="s" show={props.showFeedback} onHide={props.onCloseClick}>
                <Modal.Body>
                    <Form onSubmit={openIssue}>
                        <Form.Group controlId="issueTitle">
                            <Form.Label>Issue Summary</Form.Label>
                            <Form.Control tas="textarea" />
                        </Form.Group>
                        <Form.Group controlId="issueBody">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        <div style={{ float: 'right' }}>
                            <Button variant="light" onClick={props.onCloseClick}>
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
