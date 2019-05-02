import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import UpdateProduct from './components/UpdateProduct';
// Redux
import { Provider } from 'react-redux';
import store from './store';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <Fragment>
            <Header/>

            <div className="containter">
              <Switch>
                <Route exact path="/" component={Products}/>
                <Route exact path="/products/add" component={AddProduct}/>
                <Route exact path="/products/update/:id" component={UpdateProduct}/>
              </Switch>
            </div>

          </Fragment>
        </Router>
      </Provider>
    )
  }
}
