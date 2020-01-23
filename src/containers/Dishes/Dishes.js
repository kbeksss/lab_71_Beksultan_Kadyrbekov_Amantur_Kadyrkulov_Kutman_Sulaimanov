import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {deleteDish, fetchDishes, postDish, postDishChanges} from "../../store/actionCreators/dishesActions";
import {Button, Spinner, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Dish from "../../components/Dish/Dish";
import DishForm from "../../components/DishForm/DishForm";
const initialDish = {
    title: '',
    price: 0,
    img: '',
};

const Dishes = props => {
    const [modal, toggleModal] = useState(false);
    const [dish, setDish] = useState(initialDish);
    const [dishId, setDishId] = useState('');
    const [editing, setEditing] = useState(false);
    const closeModal = () => {
        toggleModal(false);
        setDish(initialDish);
    };
    const inputChange = (event) => {
        setDish({
            ...dish,
            [event.target.name]: event.target.value
        });
    };
    const submitDish = async e => {
        e.preventDefault();
        if(editing){
            await props.postChanges(dishId, dish);
            setDish(initialDish);
            setEditing(false);
        } else{
            await props.postDish(dish);
        }
        closeModal();
        props.fetchDishes();
    };
    const editDish = id => {
        setEditing(true);
        const currentDish = {...props.dishes[id]};
        setDishId(id);
        setDish(currentDish);
        toggleModal(true);
    };
    useEffect(()=> {
        props.fetchDishes();
        //eslint-disable-next-line
    }, []);
    return (
        <div className='Dishes container pt-4'>
            <div className='d-flex justify-content-between pb-1'>
                <h3>Dishes</h3>
                <Button color='primary' onClick={() => toggleModal(true)}>Add new Dish</Button>
            </div>
            <div className='mt-5'>
                {!props.loading ? props.dishes && Object.keys(props.dishes).map(dish => (
                    <Dish
                        editDish={() => editDish(dish)}
                        removeDish={() => props.removeDish(dish)}
                        key={dish}
                        title={props.dishes[dish].title}
                        image={props.dishes[dish].img}
                        price={props.dishes[dish].price}
                    />
                )): <Spinner/>}
            </div>
            <Modal isOpen={modal} toggle={closeModal}>
                <ModalHeader toggle={closeModal}>{editing ? ('You are editing the dish') : ('You are adding a new Dish')}</ModalHeader>
                <ModalBody>
                    {!props.sendLoading ? (
                        <DishForm
                            onChange={inputChange}
                            titleValue={dish.title}
                            priceValue={dish.price}
                            imgValue={dish.img}
                            submit={submitDish}
                        />
                    ) : <Spinner/>}

                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={closeModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};
const mapStateToProps = state => ({
    dishes: state.dishes.allDishes,
    loading: state.dishes.loading,
    sendLoading: state.dishes.sendLoading,
});
const mapDispatchToProps = dispatch => ({
    fetchDishes: () => dispatch(fetchDishes()),
    postDish: dish => dispatch(postDish(dish)),
    postChanges: (id,dish) => dispatch(postDishChanges(id, dish)),
    removeDish: id => dispatch(deleteDish(id)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Dishes);
