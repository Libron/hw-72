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
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => {
    return {
        addDish: (id, data) => dispatch(addDish(data)),
    }
};

export default connect(null, mapDispatchToProps)(AddDish);