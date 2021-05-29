import React, { Component } from 'react';

class Review extends Component {

  handleButtonClick = (e) => {
    this.props.deleteReview(this.props.review.id)
  }

  render() {
    return (
      <div>
        <li>
          {this.props.review.text}
        </li>
        <button onClick={this.handleButtonClick}> X </button>
      </div>
    );
  }

};

export default Review;
