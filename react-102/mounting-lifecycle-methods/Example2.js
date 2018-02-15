import React from 'react';
import ReactDOM from 'react-dom';

export class Example2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = { text: '' };
  }

  componentWillMount() {
    this.setState({ text: 'Hello world' });
  }

  render() {
    return <h1>{this.state.text}</h1>;
  }
}

ReactDOM.render(
  <Example2 />,
  document.getElementById('app')
);