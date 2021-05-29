import React, { Component } from 'react';

class RestaurantInput extends Component {
  state = {
    text: ""
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    if(this.state.text) {
      this.props.addRestaurant(this.state.text)
      this.setState({text: ""})
    }
  }

  render() {
    return (
      <div>
        Restaurant Input
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" value={this.state.text} onChange={(e) => this.setState({text: e.target.value})} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
