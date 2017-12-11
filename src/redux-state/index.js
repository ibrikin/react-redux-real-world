import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import * as reducers from "./reducers";
import api from "./middleware/api";

export default function configureStore(initialState) {
    const rootReducer = combineReducers( reducers );
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            thunk,
            api,
        ),
    );
}