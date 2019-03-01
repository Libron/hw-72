import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import './DishForm.css';

class DishForm extends Component {
    constructor(props) {
        super(props);

        if (props.dish) {
            this.state = {...props.dish};
        } else {
            this.state = {
                name: '',
                price: '',
                imgURL: '',
            };
        }
    }

    valueChanged = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    };

    submitHandler = event => {
        event.preventDefault();
        this.props.submit(this.props.id, {...this.state}, this.props.history);
    };

    render() {
        return (
            <Form onSubmit={this.submitHandler} className='DishForm'>
                <FormGroup>
                    <Label for="name">Name</Label>
                    <Input type="text" name="name" id="name" value={this.state.name} onChange={this.valueChanged} />
                </FormGroup>

                <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="text" name="price" id="price"  value={this.state.price} onChange={this.valueChanged} />
                </FormGroup>

                <FormGroup>
                    <Label for="imgURL">Image URL</Label>
                    <Input type="text" name="imgURL" id="imgURL" value={this.state.imgURL} onChange={this.valueChanged} />
                </FormGroup>
                <Button color="info" className="btn-submit">Submit</Button>
            </Form>
        );
    }
}

export default DishForm;