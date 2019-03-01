import React from 'react';
import DishForm from "../../components/DishForm/DishForm";
import connect from "react-redux/es/connect/connect";
import {addDish} from "../../store/actions/dishAction";

const AddDish = (props) => {
    return (
        <div>
            <h3 className="PageTitle">Add dish form</h3>
            <DishForm
                submit={props.addDish}
                history={props.history}
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addDish: (id, data, history) => dispatch(addDish(data, history)),
    }
};

export default connect(null, mapDispatchToProps)(AddDish);