/*
In regular JS, style values are almost always strings. 
Even if a style value is numeric, you usually have to write it as a string so that you can specify a unit.
For example, you have to write "450px" or "20%".

In React, if you write a style value as a number, then the unit "px" is assumed

*/

import React from 'react';
import ReactDOM from 'react-dom';
const styles={
  background: 'lightblue',
  color:      'darkred',
  marginTop :100,
  fontSize:50
};

const styleMe = <h1 style={styles}>Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);