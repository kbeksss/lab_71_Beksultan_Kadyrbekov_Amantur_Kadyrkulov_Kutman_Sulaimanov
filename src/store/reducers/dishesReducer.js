import {
    DELETE_DISH_REQUEST,
    DELETE_DISH_SUCCESS,
    FETCH_DISHES_ERROR,
    FETCH_DISHES_REQUEST,
    FETCH_DISHES_SUCCESS, POST_DISH_ERROR,
    POST_DISH_REQUEST, POST_DISH_SUCCESS
} from "../actionCreators/actionTypes";

const initialState = {
    allDishes: [],
    loading: false,
    sendLoading: false,
};

const dishesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DISHES_SUCCESS:
            return {
                ...state,
                loading: false,
                allDishes: Object.keys(action.dishes).map(dish => ({...action.dishes[dish], id: dish})),
            };
        case FETCH_DISHES_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_DISHES_ERROR:
            return {
                ...state,
                loading: false,
            };
        case POST_DISH_REQUEST:
            return {
                ...state,
                sendLoading: true,
            };
        case POST_DISH_SUCCESS:
            return {
                ...state,
                sendLoading: false,
            };
        case POST_DISH_ERROR:
            return {
                ...state,
                sendLoading: false,
            };
        case DELETE_DISH_REQUEST:
            console.log('request');
            return state;
        case DELETE_DISH_SUCCESS:
            console.log('delete');
            return {
                ...state,
                allDishes: state.allDishes.filter(dish => dish.id !== action.id),
            };
        default:
            return state;
    }
};

export default dishesReducer;
