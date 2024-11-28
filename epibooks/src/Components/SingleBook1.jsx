import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea';

class SingleBook extends Component {
  state = {
    selected: false, 
  };

  
  handleCardClick = () => {
    this.setState({ selected: !this.state.selected });
  };

  render() {
    const { book } = this.props; 
    return (
      <Card
        onClick={this.handleCardClick} 
        style={{
          border: this.state.selected ? '3px solid red' : 'none', 
          marginBottom: '20px',
          cursor: 'pointer', 
        }}
      >
        <Card.Img
          variant="top"
          src={book?.img || "https://via.placeholder.com/150"} 
        />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {book?.title || "No title available"} 
          </Card.Title>
          {this.state.selected && (
            <div style={{ marginTop: '10px', padding: '10px', border: '1px solid blue' }}>
             <CommentArea />
            </div>
          )}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
