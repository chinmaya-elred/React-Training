import React, { Component } from 'react';

class LifecycleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello!',
    };
  }

  componentDidMount() {
    console.log('Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.message !== this.state.message) {
      console.log('Message changed:', this.state.message);
    }
  }

  componentWillUnmount() {
    console.log('Component will unmount');
  }

  changeMessage = () => {
    this.setState({ message: 'Updated Message' });
  }

  render() {
    return (
      <div>
        <h1>Component Life Cycle</h1>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Change Message</button>
      </div>
    );
  }
}

export default LifecycleExample;
