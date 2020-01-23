import React from 'react';
import {Button} from 'reactstrap';
const Dish = props => {
    return (
        <div className='row align-items-center mt-2 mb-2'>
            <div className='col-2'>
                <img className='rounded' height='50' width='auto' src={props.image} alt="dish"/>
            </div>
            <span className='col-4'>{props.title}</span>
            <span className='col-3'>{props.price} KGS</span>
            <Button className='col-1' onClick={props.editDish}>Edit</Button>
            <Button className='col-1 ml-1' color='danger' onClick={props.removeDish}>Delete</Button>
        </div>
    );
};

export default Dish;
