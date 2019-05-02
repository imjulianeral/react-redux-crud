import React, { Component, Fragment } from 'react';
// Redux
import { Provider } from 'react-redux';
import store from './store';
import Header from './components/Header';

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Fragment>
          <Header/>
        </Fragment>
      </Provider>
    )
  }
}
