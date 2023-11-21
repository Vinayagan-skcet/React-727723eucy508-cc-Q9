import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello from Parent!',
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <ChildComponent message={this.state.message} />
      </div>
    );
  }
}

export default ParentComponent;
