/*
React applications are made out of components.
What's a component?
A component is a small, reusable chunk of code that is responsible for one job.
That job is often to render some HTML.
*/

import React from 'react';
import ReactDOM from 'react-dom';

class MyComponentClass extends React.Component {
  render() {
    return <h1>Hello world</h1>;
  }
};

ReactDOM.render(
  <MyComponentClass />,
  document.getElementById('app')
);