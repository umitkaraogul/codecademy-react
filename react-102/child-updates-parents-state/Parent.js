import React from 'react';
import ReactDOM from 'react-dom';
import { Child } from './Child';

class Parent extends React.Component {
  constructor(props) {
    super(props);
    
    this.changeName=this.changeName.bind(this);

    this.state = { name: 'Frarthur' };
  }
  
  changeName(newName){
    this.setState({
       name: newName
    });
  }

  render() {
    return <Child name={this.state.name} 
             onChange={this.changeName} />
  }
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
);