import React from 'react';
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

const DishForm = props => {
    return (
        <Form onSubmit={props.submit}>
            <FormGroup row>
                <Label for="title" sm={3}>Dish Title</Label>
                <Col sm={9}>
                    <Input onChange={props.onChange} type="name" value={props.titleValue} name="title" id="title" placeholder="Write the dish title" />
                </Col>
            </FormGroup>
            <FormGroup row>
                <Label for="price" sm={3}>Dish price</Label>
                <Col sm={9}>
                    <Input onChange={props.onChange} type="number" value={props.priceValue} name="price" id="price" placeholder="Write the dish price" />
                </Col>
            </FormGroup>
            <FormGroup row className='pl-3 pr-3'>
                <Label for="dishUrl">Dish image url</Label>
                <Input
                    onChange={props.onChange}
                    value={props.imgValue}
                    type="url"
                    name="img"
                    id="dishUrl"
                    placeholder="Put the dish image url"
                />
            </FormGroup>
            <FormGroup check className='text-sm-right'>
                <Button color='primary' className='ml-auto'>Submit</Button>
            </FormGroup>
        </Form>
    );
};

export default DishForm;
