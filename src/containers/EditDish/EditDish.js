import React, {Component} from 'react';
import {fetchDish, updateDish} from "../../store/actions/dishAction";
import connect from "react-redux/es/connect/connect";
import DishForm from "../../components/DishForm/DishForm";
import Spinner from "../../components/Spinner/Spinner";

class EditDish extends Component {
    componentDidMount() {
        this.props.fetchDish(this.props.match.params.id);
    }

    render() {
        if (this.props.loading) {
            return <Spinner />
        }

        return (
            <div>
                <h3 className="PageTitle">Edit dish form</h3>
                <DishForm
                    id={this.props.match.params.id}
                    dish={this.props.dish}
                    history={this.props.history}
                    submit={this.props.updateDish}
                />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        dish: state.dishes.dish,
        loading: state.dishes.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDish: (id) => dispatch(fetchDish(id)),
        updateDish: (id, data, history) => dispatch(updateDish(id, data, history))
        }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditDish);