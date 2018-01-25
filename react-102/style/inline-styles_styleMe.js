/*
The outer curly braces inject JavaScript into JSX. 
They say, "everything between us should be read as JavaScript, not JSX."
The inner curly braces create a JavaScript object literal. 
*/

import React from 'react';
import ReactDOM from 'react-dom';

const styleMe = <h1 style={{ background: 'lightblue', color: 'darkred' }} >Please style me! I am so bland!</h1>;

ReactDOM.render(
	styleMe, 
	document.getElementById('app')
);