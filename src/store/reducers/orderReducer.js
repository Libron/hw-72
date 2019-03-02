import {
    COMPLETE_ORDER_FAILURE,
    COMPLETE_ORDER_REQUEST, COMPLETE_ORDER_SUCCESS,
    FETCH_ORDERS_FAILURE,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    orders: null,
    loading: false,
    error: null
};

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_REQUEST:
            return {...state, loading: true};
        case FETCH_ORDERS_SUCCESS:
            return {...state, loading: false, orders: action.orders};
        case FETCH_ORDERS_FAILURE:
            return {...state, loading: false, error: action.error};
        case COMPLETE_ORDER_REQUEST:
            return {...state, loading: true};
        case COMPLETE_ORDER_SUCCESS:
            const orders = {...state.orders};
            delete orders[action.id];
            return {
                ...state,
                loading: false,
                orders
            };
        case COMPLETE_ORDER_FAILURE:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};

export default orderReducer;