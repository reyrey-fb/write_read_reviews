import database from "../apis/database";
import { CREATE_REVIEW, FETCH_REVIEWS, FETCH_PRODUCTS } from "./types"
import history from '../history';

export const createReview = (id, formValues) => async (dispatch) => {
    const  productId  = id; 
    const response = await database.post('./reviews', {...formValues, productId});
    dispatch ({type: CREATE_REVIEW, payload: response.data})
    //navigate programmatically back to the list homepage
    history.push('/')
}

export const fetchReviews = () => async dispatch => {
    const response = await database.get('./reviews');
    dispatch ({type: FETCH_REVIEWS, payload: response.data})
}

export const fetchProducts = () => async dispatch => {
  const response = await database.get(`./products`);
  dispatch({ type: FETCH_PRODUCTS, payload: response.data });
};