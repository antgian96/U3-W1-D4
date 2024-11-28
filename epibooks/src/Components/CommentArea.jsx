import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class CommentArea extends Component {
  state = {
    commentText: "", // Stato per gestire il testo del commento
  };

  // Gestisce il cambiamento dell'input
  handleChange = (e) => {
    this.setState({ commentText: e.target.value });
  };

  // Gestisce l'invio del commento
  handleSubmit = (e) => {
    e.preventDefault(); // Impedisce il comportamento predefinito del form
    const { commentText } = this.state;
    console.log("Comment submitted:", commentText);

    // Resetta il campo di testo dopo l'invio
    this.setState({ commentText: "" }); 
  };

  render() {
    console.log("CommentArea rendered");
    return (
      <Form onSubmit={this.handleSubmit} style={{ marginTop: '10px' }}>
        <Form.Group className="mb-3" controlId="formCommentText">
          <Form.Label>Leave a comment</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your comment"
            value={this.state.commentText}
            onChange={this.handleChange}
          />
          <Form.Text className="text-muted">
            Your comment will remain private.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default CommentArea;
