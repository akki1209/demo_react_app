import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from "react-router-dom";

import UserList from './components/user'
import StateComponent from './components/StateComponent';
import Header from './components/Header';
import Hello from './components/hello';

class App extends Component {

  state = {
    theamColor: 'red'
  }

  handleTheamColorChange = (colorName) => {
    this.setState({ theamColor: colorName })
  }

  render() {

    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={StateComponent} />
            <Route  path="/user-feature" component={UserList} />
            <Route path="/user-feature/:id" component={Hello} />
            <Route path="/hello" component={Hello} />
          </Switch>
          
          <button onClick={() => { this.handleTheamColorChange('blue')}}>Blue</button>
          <button onClick={() => { this.handleTheamColorChange('red') }}> Red </button>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
