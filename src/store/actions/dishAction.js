import {API} from "../API";

import {
    ADD_DISH_REQUEST, ADD_DISH_SUCCESS, ADD_DISH_FAILURE,
    FETCH_DISH_REQUEST, FETCH_DISH_FAILURE, FETCH_DISH_SUCCESS,
    FETCH_DISHES_REQUEST, FETCH_DISHES_FAILURE, FETCH_DISHES_SUCCESS,
    REMOVE_DISH_FAILURE, REMOVE_DISH_REQUEST, REMOVE_DISH_SUCCESS,
    UPDATE_DISH_FAILURE, UPDATE_DISH_REQUEST, UPDATE_DISH_SUCCESS,
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

export const fetchDishRequest = () => {
    return {type: FETCH_DISH_REQUEST};
};
export const fetchDishSuccess = dish => {
    return {type: FETCH_DISH_SUCCESS, dish};
};
export const fetchDishFailure = error => {
    return {type: FETCH_DISH_FAILURE, error}
};

export const updateDishRequest = () => {
    return {type: UPDATE_DISH_REQUEST};
};
export const updateDishSuccess = () => {
    return {type: UPDATE_DISH_SUCCESS};
};
export const updateDishFailure = error => {
    return {type: UPDATE_DISH_FAILURE, error}
};

export const addDishRequest = () => {
    return {type: ADD_DISH_REQUEST}
};
export const addDishSuccess = () => {
    return {type: ADD_DISH_SUCCESS}
};
export const addDishFailure = error => {
    return {type: ADD_DISH_FAILURE, error}
};

export const removeDishRequest = () => {
    return {type: REMOVE_DISH_REQUEST}
};
export const removeDishSuccess = (id) => {
    return {type: REMOVE_DISH_SUCCESS, id}
};
export const removeDishFailure = error => {
    return {type: REMOVE_DISH_FAILURE, error}
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

export const fetchDish = (id) => {
    return (dispatch) => {
        dispatch(fetchDishRequest());
        API.getDishInfo(id).then(response => {
            dispatch(fetchDishSuccess(response.data));
        }, error => {
            dispatch(fetchDishFailure(error));
        });
    }
};

export const updateDish = (id, dish, history) => {
    return (dispatch) => {
        dispatch(updateDishRequest);
        API.updateDish(id, dish).then(() => {
            dispatch(updateDishSuccess());
            alert('Успешно внесены изменения!');
            history.push('/');
        }, error => {
            dispatch(updateDishFailure(error));
        });
    }
};

export const removeDish = (id) => {
    return (dispatch) => {
        dispatch(removeDishRequest);
        API.deleteDish(id).then(()=>{
            dispatch(removeDishSuccess(id));
        }, error => {
            dispatch(removeDishFailure(error));
        });
    }
};

export const addDish = (dish, history) => {
    return (dispatch) => {
        dispatch(addDishRequest);
        API.addDish(dish).then(() => {
            dispatch(addDishSuccess());
            alert('Вы успешно добавили пиццу!');
            history.push('/');
        }, error => {
            dispatch(addDishFailure(error));
        });
    }
};
