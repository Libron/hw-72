import React, {Component} from 'react';
import {fetchDishes} from "../../store/actions/dishAction";
import {fetchOrders} from "../../store/actions/orderAction";
import Spinner from "../../components/Spinner/Spinner";
import {connect} from "react-redux";

import './OrdersPage.css';
import {Button} from "reactstrap";

const DELIVERY_COST = 150;

class OrdersPage extends Component {
    componentDidMount() {
        this.props.fetchOrders();
        this.props.fetchDishes();
    };

    render() {
        if (!this.props.orders || !this.props.dishes) {
            return <Spinner/>

        }

        const orders = Object.keys((this.props.orders)).map(orderId => {
            let orderPrice = 0;

            let order = this.props.orders[orderId];
            let orderItems = Object.keys(order).map(dishId => {

                const dish = this.props.dishes[dishId];

                const orderQty = order[dishId];
                const orderItemPrice = dish.price * orderQty;
                orderPrice += orderItemPrice;

                return (
                    <li key={dishId}>{orderQty} x <strong>{dish.name}</strong><span>{orderItemPrice} KGS</span></li>
                );
            });
            return (
                <div className="item" key={orderId} style={{marginBottom: '20px', borderBottom: '1px solid black'}}>
                    <div className="order-items">
                        <p className="item-id">Order №:<strong> {orderId}</strong></p>
                        <p><i>You ordered the following: </i></p>
                        <ul>
                            {orderItems}
                            <li className="item-delivery"><strong>Delivery price</strong><span> {DELIVERY_COST} KGS</span></li>
                        </ul>
                        <p className="item-calc">{orderPrice + DELIVERY_COST} KGS</p>

                    </div>
                    <div className="order-info">
                        <p className="item-total"><strong>Order total:</strong> {orderPrice + DELIVERY_COST} KGS</p>
                        <Button color="success">Complete order</Button>
                    </div>
                </div>
            )
        });


        return (
            <div className="OrdersPage">
                <h3>Orders List</h3>
                <div className="Items">
                    {orders}
                </div>
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