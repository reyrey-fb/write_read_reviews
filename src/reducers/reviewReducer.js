import _ from 'lodash';
import { CREATE_REVIEW, FETCH_REVIEWS } from "../actions/types";

export default (state= {}, action) => {
    switch (action.type) {
        case FETCH_REVIEWS:
          return {...state, ..._.mapKeys(action.payload, 'id') };
        case CREATE_REVIEW:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
}