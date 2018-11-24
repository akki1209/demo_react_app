import React, {Component} from 'react';

class StateComponent extends Component {

  state = {
    isLike: true,
  }

  handleLike = () => {
    this.setState({
      isLike: !this.state.isLike
    })
  }

  render(){
    return (
      <button onClick={this.handleLike}> { this.state.isLike ? 'Like' : 'UnLike' }  </button>
    )
  }
}

export default StateComponent;
