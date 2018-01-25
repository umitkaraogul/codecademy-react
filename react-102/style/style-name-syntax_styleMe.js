/*
Style Name Syntax;
In regular JavaScript, style names are written in hyphenated-lowercase.
In React, those same names are instead written in camelCase

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