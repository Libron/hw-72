import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import DishesPage from "./containers/DishesPage/DishesPage";
import OrdersPage from "./containers/OrdersPage/OrdersPage";
import EditDish from "./containers/EditDish/EditDish";
import AddDish from "./containers/AddDish/AddDish";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
          <Container>
              <Switch>
                  <Route path="/" exact component={DishesPage}/>
                  <Route path="/dishes/:id/edit" exact component={EditDish}/>
                  <Route path="/dishes/add" exact component={AddDish}/>
                  <Route path="/orders" exact component={OrdersPage}/>
                  <Route render={() => <h1>Not Found</h1>}/>
              </Switch>
          </Container>
      </div>
    );
  }
}

export default App;
