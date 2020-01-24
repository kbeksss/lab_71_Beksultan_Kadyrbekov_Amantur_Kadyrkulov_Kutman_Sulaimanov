import {
    DELETE_ORDER_SUCCESS,
    FETCH_ORDERS_ERROR,
    FETCH_ORDERS_REQUEST,
    FETCH_ORDERS_SUCCESS
} from "./actionTypes";
import axiosTurtle from "../../axios-dishes";

const fetchOrdersRequest = () => ({type: FETCH_ORDERS_REQUEST});
const fetchOrdersSuccess = orders => ({type: FETCH_ORDERS_SUCCESS, orders});
const fetchOrdersError = () => ({type: FETCH_ORDERS_ERROR});

export const fetchOrders = () => {
    return async dispatch => {
        dispatch(fetchOrdersRequest());
        try {
            const response = await axiosTurtle.get('orders.json');
            dispatch(fetchOrdersSuccess(response.data));

        } catch (e) {
            console.error('Error while getting orders');
            dispatch(fetchOrdersError());
        }
    }
};

const deleteOrderSuccess = id => ({type: DELETE_ORDER_SUCCESS, id});

export const deleteOrder = id => {
    return async dispatch => {
        try{
            await axiosTurtle.delete('orders/' + id + '.json');
            dispatch(deleteOrderSuccess(id));
        } catch (e) {
            console.error('Error while deleting the order');
        }
    }
};
