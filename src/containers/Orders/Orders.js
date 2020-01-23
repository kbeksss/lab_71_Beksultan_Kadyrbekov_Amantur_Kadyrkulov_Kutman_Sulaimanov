import React, {useEffect} from 'react';
import {connect} from "react-redux";
import Order from "../../components/Order/Order";
import {fetchOrders} from "../../store/actionCreators/ordersActions";

const Orders = props => {
    useEffect(() => {
        props.fetchOrders();
    }, []);
    console.log(props.orders);
    console.log(props.dishes);
    return (
        <div className='container pt-5 px-5'>
            {props.dishes && Object.keys(props.orders).map(order => (
                <Order
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
