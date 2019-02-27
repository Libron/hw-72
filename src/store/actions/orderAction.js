import {API} from "../API";
import {FETCH_ORDERS_FAILURE, FETCH_ORDERS_REQUEST, FETCH_ORDERS_SUCCESS} from "./actionTypes";

export const fetchOrdersRequest = () => {
    return {type: FETCH_ORDERS_REQUEST};
};

export const fetchOrdersSuccess = orders => {
    return {type: FETCH_ORDERS_SUCCESS, orders};
};

export const fetchOrdersFailure = error => {
    return {type: FETCH_ORDERS_FAILURE, error}
};

export const fetchOrders = () => {
    return (dispatch) => {
        dispatch(fetchOrdersRequest());
        API.getOrders().then(response => {
            dispatch(fetchOrdersSuccess(response.data));
        }, error => {
            dispatch(fetchOrdersFailure(error));
        });
    }
};

