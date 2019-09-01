import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Redux
import store from './store';
import { Provider } from 'react-redux';
// Components
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import EditProducts from './components/EditProducts';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Provider store={ store }>
        <Header/>
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Products }/>
            <Route exact path="/products/new" component={ NewProducts }/>
            <Route exact path="/products/edit/:id" component={ EditProducts }/>
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
