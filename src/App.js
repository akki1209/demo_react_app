import React, { Component } from 'react';

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
      <React.Fragment>
        <Header />
        <UserList theamColor={this.state.theamColor }/>
        <StateComponent />
        <Hello />

        <button onClick={() => { this.handleTheamColorChange('blue')}}>Blue</button>
        <button onClick={() => { this.handleTheamColorChange('red') }}> Red </button>
      </React.Fragment>
    );
  }
}

export default App;
