/*
Every component has something called props.
A component's props is an object. It holds information about that component.
To see a component's props object, you use the expression this.props.

*/

import React from 'react';
import ReactDOM from 'react-dom';

class PropsDisplayer extends React.Component {
  render() {
  	const stringProps = JSON.stringify(this.props);

    return (
      <div>
        <h1>CHECK OUT MY PROPS OBJECT</h1>
        <h2>{stringProps}</h2>
      </div>
    );
  }
}

// ReactDOM.render goes here:
ReactDOM.render(<PropsDisplayer myProp="Hello" />, document.getElementById('app'));

/*
Output:
  CHECK OUT MY PROPS OBJECT
  {"myProp":"Hello"}
*/
