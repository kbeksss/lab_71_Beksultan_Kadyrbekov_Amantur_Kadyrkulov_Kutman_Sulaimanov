import {
    DELETE_DISH_ERROR,
    DELETE_DISH_REQUEST,
    DELETE_DISH_SUCCESS,
    FETCH_DISHES_ERROR,
    FETCH_DISHES_REQUEST,
    FETCH_DISHES_SUCCESS,
    POST_DISH_ERROR,
    POST_DISH_REQUEST,
    POST_DISH_SUCCESS
} from "./actionTypes";
import axiosTurtle from "../../axios-dishes";

const fetchDishesRequest = () => ({type: FETCH_DISHES_REQUEST});
const fetchDishesSuccess = dishes => ({type: FETCH_DISHES_SUCCESS, dishes});
const fetchDishesError = () => ({type: FETCH_DISHES_ERROR});

export const fetchDishes = () => {
    return async dispatch => {
        dispatch(fetchDishesRequest());
        try{
            const response = await axiosTurtle.get('dishes.json');
            dispatch(fetchDishesSuccess(response.data));
        } catch(e){
            console.error('Error while requesting for dishes');
            dispatch(fetchDishesError());
        }
    };
};

const postDishRequest = () => ({type: POST_DISH_REQUEST});
const postDishSuccess = () => ({type: POST_DISH_SUCCESS});
const postDishError = () => ({type: POST_DISH_ERROR});

export const postDish = dish => {
    return async dispatch => {
        dispatch(postDishRequest());
        try{
            await axiosTurtle.post('dishes.json', dish);
            dispatch(postDishSuccess());
        } catch (e) {
            console.error('Error while sending a dish info');
            dispatch(postDishError());
        }
    }
};

export const postDishChanges = (id, dish) => {
    return async dispatch => {
        dispatch(postDishRequest());
        try{
            await axiosTurtle.put('dishes/' + id + '.json', dish);
            dispatch(postDishSuccess());
        } catch (e) {
            console.error('Error while sending changes');
            dispatch(postDishError());
        }
    }
};

const deleteDishRequest = () => ({type: DELETE_DISH_REQUEST});
const deleteDishSuccess = id => ({type: DELETE_DISH_SUCCESS, id});
const deleteDishError = () => ({type: DELETE_DISH_ERROR});

export const deleteDish = id => {
    return async dispatch => {
        dispatch(deleteDishRequest());
        try{
            await axiosTurtle.delete('dishes/' + id + '.json');
            dispatch(deleteDishSuccess(id));
        } catch (e){
            console.error('Error while deleting the dish');
            dispatch(deleteDishError());
        }
    }
};
