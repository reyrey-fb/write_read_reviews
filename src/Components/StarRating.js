import React, {Component} from "react";
import Rating from "react-simple-star-rating";

class StarRating extends Component {

    renderError({ touched, error}) {
        if ( touched && error ) {
            return (
                <small className="form-text text-muted">
                    {error}
                </small>
            )
        }
    }

    render() {
        const {
            input: { value, onChange },
            meta
            } = this.props;
        return (
            <div className="mb-3 form-group">
                <Rating
                onClick = {(value) => onChange(value)}
                ratingValue = {value}
                stars = {5}
                size = {28}
                transition
                fillColor = '#FFE82F'
                emptyColor = '#292b2c'
                />
                {this.renderError(meta)}
            </div>
        )
    }
}

export default StarRating;