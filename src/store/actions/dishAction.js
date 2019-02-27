import {API} from "../API";

import {
    FETCH_DISHE_FAILURE,
    FETCH_DISHE_REQUEST,
    FETCH_DISHE_SUCCESS,
    FETCH_DISHES_FAILURE,
    FETCH_DISHES_REQUEST,
    FETCH_DISHES_SUCCESS
} from "./actionTypes";

export const fetchDishesRequest = () => {
    return {type: FETCH_DISHES_REQUEST};
};

export const fetchDishesSuccess = dishes => {
    return {type: FETCH_DISHES_SUCCESS, dishes};
};

export const fetchDishesFailure = error => {
    return {type: FETCH_DISHES_FAILURE, error}
};

export const fetchDisheRequest = () => {
    return {type: FETCH_DISHE_REQUEST};
};

export const fetchDisheSuccess = dishe => {
    return {type: FETCH_DISHE_SUCCESS, dishe};
};

export const fetchDisheFailure = error => {
    return {type: FETCH_DISHE_FAILURE, error}
};


export const fetchDishes = () => {
    return (dispatch) => {
        dispatch(fetchDishesRequest());

        API.getDishes().then(response => {
            dispatch(fetchDishesSuccess(response.data));
        }, error => {
            dispatch(fetchDishesFailure(error));
        });
    }
};