import React, {Component} from 'react';

import './DishesPage.css';
import {connect} from "react-redux";
import {fetchDishes} from "../../store/actions/dishAction";

class DishesPage extends Component {
    componentDidMount(){
        this.props.fetchDishes();
    }

    render() {

        if (!this.props.dishMenu) {
            return <h1>Loading...</h1>
        }

        const menu = this.props.dishMenu;
        console.log(Object.keys(menu));
        return (
            <div className="DishesPage">
                <div className="header">
                    <h1>Dishes</h1>
                    <button>Add new Dish</button>
                </div>


                    {Object.keys(menu).map(id=>(
                        <div key={id} className="card">
                            <img src={menu[id].imageURL} alt={menu[id].title} />
                            <h6>{menu[id].title}</h6>
                            <p>{menu[id].cost}</p>
                        </div>
                    ))}
                
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dishMenu: state.dishes.dishMenu,
        loading: state.dishes.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDishes: () => dispatch(fetchDishes())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DishesPage);