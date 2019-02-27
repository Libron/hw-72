import React, {Component} from 'react';

import './DishesPage.css';
import {connect} from "react-redux";
import {fetchDishes} from "../../store/actions/dishAction";

class DishesPage extends Component {
    componentDidMount(){
        this.props.fetchDishes();
    }

    dishEditHandler = id => {
      console.log('[Edit Dish]', id);
      this.props.history.push('/dishes/' + id + '/edit');
    };

    dishRemoveHandler = id => {
        console.log('[Remove Dish]', id);
    };

    render() {

        if (!this.props.dishes) {
            return <h1>Loading...</h1>
        }

        const dishes = Object.keys(this.props.dishes).map(dishID => {

            const dish = this.props.dishes[dishID];

            return (
                    <div key={dishID} className="Item">
                        <img src={dish.imgURL} alt={dish.name} />
                        <h6>{dish.name}</h6>
                        <p>{dish.price}</p>

                        <div className="Buttons">
                            <button onClick={() => this.dishEditHandler(dishID)}>Edit</button>
                            <button onClick={() => this.dishRemoveHandler(dishID)}>Delete</button>
                        </div>
                    </div>
                );

        });

        return (
            <div className="DishesPage">
                <div className="header">
                    <h1>Dishes</h1>
                    <button>Add new Dish</button>
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
        fetchDishes: () => dispatch(fetchDishes())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesPage);