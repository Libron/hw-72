import axios from "../../axios-instance";

import {FETCH_DISHES_FAILURE, FETCH_DISHES_REQUEST, FETCH_DISHES_SUCCESS} from "./actionTypes";

export const fetchDishesRequest = () => {
    return {type: FETCH_DISHES_REQUEST};
};

export const fetchDishesSuccess = dishes => {
    return {type: FETCH_DISHES_SUCCESS, dishes};
};

export const fetchDishesFailure = error => {
    return {type: FETCH_DISHES_FAILURE, error}
};


export const fetchDishes = () => {
    return (dispatch) => {
        dispatch(fetchDishesRequest());

        axios.get('/dishes.json').then(response => {
            dispatch(fetchDishesSuccess(response.data));
        }, error => {
            dispatch(fetchDishesFailure(error));
        });
    }
};