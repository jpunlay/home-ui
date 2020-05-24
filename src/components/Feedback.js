import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'

class Feedback extends React.Component {
    render() {
        return (
            <>
                <Modal size="s" show={this.props.showFeedback} onHide={this.props.hideFeedback}>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Comment:</Form.Label>
                                <Form.Control as="textarea" rows="3" />
                            </Form.Group>
                            <div style={{ float: 'right' }}>
                                <Button variant="light" onClick={this.props.hideFeedback}>
                                    Close
                                </Button>
                                    <Button variant="dark" onClick={this.props.hideFeedback}>
                                        Send
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