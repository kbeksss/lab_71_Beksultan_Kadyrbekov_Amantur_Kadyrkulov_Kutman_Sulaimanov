import {
    DELETE_ORDER_SUCCESS,
    FETCH_ORDERS_ERROR,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS
} from "../actionCreators/actionTypes";

const initialState = {
    orders: {},
    loading: false,
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ORDERS_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: {...action.orders},
                loading: false,
            };
        case FETCH_ORDERS_ERROR:
            return {
                ...state,
                loading: false,
            };
        case DELETE_ORDER_SUCCESS:
            let newOrders = {...state.orders};
            delete newOrders[action.id];
            return {
                ...state,
                orders: newOrders,
            };
        default:
            return state;
    }
};

export default ordersReducer;
