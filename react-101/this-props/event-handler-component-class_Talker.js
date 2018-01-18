import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './event-handler-component-class_Button';

class Talker extends React.Component {
 
  talk () {
	let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
  }
  
  render() {
    return <Button />;
  }
}

ReactDOM.render(
  <Talker />,
  document.getElementById('app')
);