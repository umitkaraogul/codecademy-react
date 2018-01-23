/*
A React component should use props to store information that can be changed, 
but can only be changed by a different component.

A React component should use state to store information that the component itself can change.
*/

import React from 'react';
import ReactDOM from 'react-dom';
import {Child} from './Child';


class Parent extends React.Component
{
  constructor(props) {
    super(props);
    this.state={name:'Frarthur'};
    
  }
  render(){
     return (
       <div>
       <Child name={this.state.name} />
       </div>
     );
  }
  
}

ReactDOM.render(<Parent />, document.getElementById('app')
);
