import React, {Component} from 'react';

import './DishesPage.css';
import {connect} from "react-redux";
import {fetchDishes, removeDish} from "../../store/actions/dishAction";
import Spinner from "../../components/Spinner/Spinner";
import {Button, ButtonGroup} from "reactstrap";

class DishesPage extends Component {
    componentDidMount(){
        this.props.fetchDishes();
    }

    dishEditHandler = id => {
       this.props.history.push('/dishes/' + id + '/edit');
    };

    render() {

        if (!this.props.dishes) {
            return <Spinner/>
        }

        const dishes = Object.keys(this.props.dishes).map(dishID => {

            const dish = this.props.dishes[dishID];

            return (
                    <div key={dishID} className="Item">
                        <img src={dish.imgURL} alt={dish.name} />
                        <div>
                            <h4>{dish.name}</h4>
                            <p className="price">{dish.price} KGS</p>
                        </div>
                        <ButtonGroup className="Buttons">
                            <Button color="warning" onClick={() => this.dishEditHandler(dishID)}>Edit</Button>
                            <Button color="danger" onClick={() => this.props.removeDish(dishID)}>Delete</Button>
                        </ButtonGroup>
                    </div>
                );

        });

        return (
            <div className="DishesPage">
                <div className="header">
                    <h1>Menu</h1>
                    <Button
                        onClick={() => this.props.history.push('/dishes/add')}
                        color="success">Add new Dish
                    </Button>
                </div>

                {dishes}

            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dishes: state.dishes.dishes,
        loading: state.dishes.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: () => dispatch(fetchDishes()),
        removeDish: (id) => dispatch(removeDish(id))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesPage);