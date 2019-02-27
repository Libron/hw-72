import React, {Component} from 'react';
import {fetchDishes} from "../../store/actions/dishAction";
import {fetchOrders} from "../../store/actions/orderAction";
import Spinner from "../../components/Spinner/Spinner";
import {connect} from "react-redux"

class OrdersPage extends Component {
    componentDidMount() {
        this.props.fetchOrders();
        this.props.fetchDishes();
    };

    render() {
        if (!this.props.orders || !this.props.dishes) {
            return <Spinner/>

        }

        return (
            <div className="App">
                <h1>Content coming soon</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        dishes: state.dishes.dishes,
        loading: state.orders.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOrders: () => dispatch(fetchOrders()),
        fetchDishes: () => dispatch(fetchDishes())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(OrdersPage);