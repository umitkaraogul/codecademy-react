/*
this.props.children
Every component's props object has a property named children.
this.props.children will return everything in between a component's opening and closing JSX tags.
So far, all of the components that you've seen have been self-closing tags, such as <MyComponentClass />. 
They don't have to be! You could write <MyComponentClass></MyComponentClass>, and it would still work.
this.props.children would return everything in between <MyComponentClass> and </MyComponentClass>.

*/


import React from 'react';
import ReactDOM from 'react-dom';
import { List } from './this-props-children_List';

class App extends React.Component {
  render() {
    return (
      <div>
        <List type='Living Musician'>
          <li>Sachiko M</li>
          <li>Harvey Sid Fisher</li>
        </List>
        <List type='Living Cat Musician'>
          <li>Nora the Piano Cat</li>
        </List>
      </div>
    );
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('app')
);