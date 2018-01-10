import React from 'react';
import ReactDOM from 'react-dom';

// In JSX, you can't use the word class! You have to use className instead:
//This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript
const myDiv= <div className="big">I AM A BIG DIV</div>;
ReactDOM.render(myDiv,document.getElementById('app'));
