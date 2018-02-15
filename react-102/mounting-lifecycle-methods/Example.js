/*
Mounting Lifecycle Methods
There are three categories of lifecycle methods: mounting, updating, and unmounting. 

There are three mounting lifecycle methods:

componentWillMount
render
componentDidMount

Whenever a component mounts, componentWillMount is called first, followed by render, followed by componentDidMount.

*/

import React from 'react';
import ReactDOM from 'react-dom';

export class Example extends React.Component {
  componentWillMount() {
    alert('component is about to mount!');
  }

  componentDidMount() {
    alert('component just finished mounting!');
  }

  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDOM.render(
  <Example />,
  document.getElementById('app')
);

setTimeout(() => {
  ReactDOM.render(
    <Example />,
    document.getElementById('app')
  );
}, 2000);