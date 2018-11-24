import React, { Component } from 'react';

import UserList from './user'
import './App.css';
import StateComponent from './StateComponent';

class App extends Component {

  state = {
    theamColor: 'red'
  }

  handleTheamColorChange = (colorName) => {
    this.setState({ theamColor: colorName })
  }

  render() {

    return (
      <React.Fragment>
        <UserList theamColor={this.state.theamColor }/>
        <StateComponent />

        <button onClick={() => { this.handleTheamColorChange('blue')}}>Blue</button>
        <button onClick={() => { this.handleTheamColorChange('red') }}> Red </button>
      </React.Fragment>
    );
  }
}

export default App;
