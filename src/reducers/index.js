import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import reviewReducer from "./reviewReducer";
import productReducer from "./productReducer";

export default combineReducers({
    form : formReducer,
    reviews : reviewReducer,
    products : productReducer
})