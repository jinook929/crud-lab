import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';

class ReviewsContainer extends Component {

  render() {
    const relatedReviews = this.props.reviews.filter(review => review.restaurantId === this.props.restaurant.id)
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        {/* <Reviews restaurantId={this.props.restaurant.id} reviews={this.props.reviews} deleteReview={this.props.deleteReview} /> */}
        <Reviews reviews={relatedReviews} deleteReview={this.props.deleteReview} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (state) => dispatch({type: "ADD_REVIEW", review: {text: state.text, restaurantId: state.restaurantId}}),
    deleteReview: (id) => dispatch({type: "DELETE_REVIEW", id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
