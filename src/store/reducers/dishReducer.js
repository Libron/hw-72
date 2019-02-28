import {
    FETCH_DISH_FAILURE,
    FETCH_DISH_REQUEST,
    FETCH_DISH_SUCCESS,
    FETCH_DISHES_FAILURE,
    FETCH_DISHES_REQUEST,
    FETCH_DISHES_SUCCESS, REMOVE_DISH_FAILURE,
    REMOVE_DISH_REQUEST,
    REMOVE_DISH_SUCCESS,
    UPDATE_DISH_FAILURE,
    UPDATE_DISH_REQUEST,
    UPDATE_DISH_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    dishes: null,
    dish: null,
    loading: false,
    error: null,

};

const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES_REQUEST:
            return {...state, loading: true};
        case FETCH_DISHES_SUCCESS:
            return {...state, loading: false, dishes: action.dishes};
        case FETCH_DISHES_FAILURE:
            return {...state, loading: false, error: action.error};
        case FETCH_DISH_REQUEST:
            return {...state, loading: true};
        case FETCH_DISH_SUCCESS:
            return {...state, loading: false, dish: action.dish};
        case FETCH_DISH_FAILURE:
            return {...state, loading: false, error: action.error};
        case UPDATE_DISH_REQUEST:
            return {...state, loading: true};
        case UPDATE_DISH_SUCCESS:
          return {...state, loading: false};
        case UPDATE_DISH_FAILURE:
            return {...state, loading: false, error: action.error};
        case REMOVE_DISH_REQUEST:
            return {...state, loading: true};
        case REMOVE_DISH_SUCCESS:
            return {...state, loading: false};
        case REMOVE_DISH_FAILURE:
            return {...state, loading: false, error: action.error};
        default:
            return state;
    }
};

export default dishReducer;