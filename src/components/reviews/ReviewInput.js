import React, { Component } from 'react';

class ReviewInput extends Component {
  state = {
    text: "",
    restaurantId: this.props.restaurantId
  }
  handleFormSubmit = (e) => {
    e.preventDefault()
    if(this.state.text) {
      this.props.addReview(this.state)
      this.setState({text: ""})
    }
  }
  render() {
    return (
      <div>
        Review Input
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default ReviewInput;
