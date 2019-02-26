import React, { Component } from 'react';
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import {Container} from "reactstrap";
import {Route, Switch} from "react-router";
import DishesPage from "./containers/DishesPage/DishesPage";
import OrdersPage from "./containers/OrdersPage/OrdersPage";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Navigation />
          <Container>
              <Switch>
                  <Route path="/" exact component={DishesPage}/>
                  <Route path="/orders" exact component={OrdersPage}/>
                  <Route render={() => <h1>Not Found</h1>}/>
              </Switch>
          </Container>
      </div>
    );
  }
}

export default App;
