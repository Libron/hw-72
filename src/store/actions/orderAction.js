import {API} from "../API";
import {
    COMPLETE_ORDER_FAILURE,
    COMPLETE_ORDER_REQUEST,
    COMPLETE_ORDER_SUCCESS,
    FETCH_ORDERS_FAILURE,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS
} from "./actionTypes";

export const fetchOrdersRequest = () => {
    return {type: FETCH_ORDERS_REQUEST};
};

export const fetchOrdersSuccess = orders => {
    return {type: FETCH_ORDERS_SUCCESS, orders};
};

export const fetchOrdersFailure = error => {
    return {type: FETCH_ORDERS_FAILURE, error}
};

export const completeOrderRequest = () => {
    return {type: COMPLETE_ORDER_REQUEST}
};
export const completeOrderSuccess = (id) => {
    return {type: COMPLETE_ORDER_SUCCESS, id}
};
export const completeOrderFailure = error => {
    return {type: COMPLETE_ORDER_FAILURE, error}
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

export const completeOrder = (id) => {
    return (dispatch) => {
        dispatch(completeOrderRequest());
        API.completeOrder(id).then(()=>{
            alert('removed', id);
            dispatch(completeOrderSuccess(id));
        }, error => {
            alert('error', error);
            dispatch(completeOrderFailure(error));
        });
    }
};
