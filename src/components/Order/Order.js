import React from 'react';
import {Badge, ListGroup, ListGroupItem, Button} from "reactstrap";

const DELIVERY = 150;
const Order = props => {
    let total = 0;
    return (
        <div className='row justify-content-center mb-3'>
            <ListGroup className='col-7 pr-0'>
                {Object.keys(props.orderDishes).map(orderDish => {
                    if(props.dishes[orderDish]){
                        total += parseInt(props.dishes[orderDish].price) * props.orderDishes[orderDish];
                        return  (<ListGroupItem
                                    key={orderDish}
                                    className="justify-content-between">
                                    <span>{props.orderDishes[orderDish]} x {props.dishes[orderDish].title}</span>
                                    <Badge className='ml-5 py-2 px-3'>{props.orderDishes[orderDish] * props.dishes[orderDish].price} KGS</Badge>
                                </ListGroupItem>
                        )
                    }
                    return null;
                })}
                <ListGroupItem className="justify-content-between"><span>Delivery: </span> <Badge className='ml-2 py-2 px-3'>{DELIVERY} KGS</Badge></ListGroupItem>
            </ListGroup>
            <ListGroup className='col-5'>
                <ListGroupItem className="justify-content-between">Order Total:</ListGroupItem>
                <ListGroupItem className="justify-content-between text-center"><Badge className='w-50 py-2' pill>{total + DELIVERY}</Badge></ListGroupItem>
                <ListGroupItem className="justify-content-between text-center"><Button onClick={props.onDelete} color='primary'> Complete Order</Button></ListGroupItem>
            </ListGroup>
        </div>
    );
};

export default Order;
