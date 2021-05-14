import React from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts, createReview, fetchReviews } from "../actions";
import Rating from "react-simple-star-rating";

import '../Styles/Home.css';

class Home extends React.Component {

  componentDidMount() {
    this.props.fetchProducts();
    this.props.fetchReviews();
  }

  renderList() {
    return this.props.products.map((product) => {
      return (
      <div key={product.id}>
        <h3 className="mt-3 mb-3">{product.name}</h3>
        {this.props.reviews.map((review) => {
          if (review.productId == product.id) {
            return (
              <div key={review.id}>
                  <Rating 
                  ratingValue={review.star_rating}
                  onClick={() => {return false}}
                  size = {23}
                  fillColor = '#FFE82F'
                  emptyColor = '#292b2c'
                  className="disabled"
                />
                <h5 className="mt-2 mb-0">{review.headline}</h5>
                <small>{review.author}</small>
                <p>{review.body}</p>
              </div>
            )
          }
        })}
        <Link to={`/review/${product.id}`} className="btn btn-dark btn-sm mb-2">Leave a Review</Link>
        <hr></hr>
      </div>
      )
    })
  }

  render() {
    console.log(this.props.products)
    console.log(this.props.reviews)
    return (
      <div className="bg-light">
        <div className="container min-vh-100">
          <div className="row row d-flex justify-content-center min-vh-100 align-items-center">
            <div className="col-md-9 col">
              <h1 className="mt-5">Product Reviews</h1>
              {this.renderList()}
            </div>
          </div>
        </div>
        </div>
      );
  }
}

const mapStateToProps = state => {
  return {
    products: Object.values(state.products),
    reviews: Object.values(state.reviews)
  }
}

export default connect(mapStateToProps, {fetchProducts, fetchReviews, createReview}) (Home);
