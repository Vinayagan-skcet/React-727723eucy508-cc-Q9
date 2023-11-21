import React from 'react';

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

export default ChildComponent;
