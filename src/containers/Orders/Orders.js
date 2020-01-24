import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Order from "../../components/Order/Order";
import {deleteOrder, fetchOrders} from "../../store/actionCreators/ordersActions";
import {fetchDishes} from "../../store/actionCreators/dishesActions";

const Orders = props => {
    useEffect(() => {
        props.fetchOrders();
        if(!props.dishes.length){
            props.fetchDishes();
        }
        // eslint-disable-next-line
    }, []);
    return (
        <div className='container pt-5 px-5'>
            {props.dishes && props.orders && Object.keys(props.orders).map(order => (
                <Order
                    onDelete={() => props.deleteOrder(order)}
                    key={order}
                    dishes={props.dishes}
                    orderDishes={props.orders[order]}
                />
            ))}
        </div>
    );
};

const mapStateToProps = state => ({
    orders: state.orders.orders,
    dishes: state.dishes.allDishes,
    loading: state.orders.loading,
});
const mapDispatchToProps = dispatch => ({
    fetchOrders: () => dispatch(fetchOrders()),
    fetchDishes: () => dispatch(fetchDishes()),
    deleteOrder: id => dispatch(deleteOrder(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
