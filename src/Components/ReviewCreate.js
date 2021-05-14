import React, {Component} from "react";
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import { createReview } from "../actions/";

import StarRating from "./StarRating";

class ReviewCreate extends Component {

    renderInput = ({ input, label, meta}) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input} className="form-control" autoComplete="off" required />
                {this.renderError(meta)}
            </div>
        )
    }

    renderTextArea = ({input, label, meta}) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                <textarea {...input} className="form-control" rows="5" required />
                {this.renderError(meta)}
            </div>
        )
    }

    renderError({ touched, error }) {
        if (touched && error ) {
            return (
                <small className="form-text text-muted">
                    {error}
                </small>
            )
        }
    }

    onSubmit = (formValues) => {
        //productID = this.props.match.params.id from react-router-dom URL
        this.props.createReview(this.props.match.params.id, formValues)
    }

    render() {     
        return (
            <div className="bg-light">
                <div className="container min-vh-100">
                    <div className="row d-flex justify-content-center min-vh-100 align-items-center">
                        <div className="col-md-6 col">
                            <h1 className="mb-3">Leave a Review</h1>
                            <form
                                onSubmit = {this.props.handleSubmit(this.onSubmit)}
                                noValidate
                            >
                                <Field name="star_rating" component={StarRating} label="Rating" type="text" />
                                <Field name="author" component={this.renderInput} label="Name" type="text" />
                                <Field name="headline" component={this.renderInput} label="Title" type="text" />
                                <Field name="body" component={this.renderTextArea} label="Description" type="text" />
                                <button className="btn btn-dark btn-block">Submit</button>                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.star_rating) {
        errors.star_rating = "You must choose a rating.";
    }
    if (!formValues.author) {
        errors.author = "You must enter your name.";
    }
    if (!formValues.headline) {
        errors.headline = "You must enter a title.";
    }
    if (!formValues.body) {
        errors.body = "You must enter a description."
    }
    return errors;
}

const formWrapped = reduxForm({
    form: "reviewForm",
    validate,
}) (ReviewCreate)

export default connect(null, {createReview}) (formWrapped);