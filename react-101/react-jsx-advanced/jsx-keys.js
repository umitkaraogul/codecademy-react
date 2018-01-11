/*
 Keys

A key is a JSX attribute. The attribute's name is key. 
The attribute's value should be something unique, similar to an id attribute.
keys don't do anything that you can see! React uses them internally to keep track of lists.
 */

import React from 'react';
import ReactDOM from 'react-dom';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>
  // expression goes here:
<li key={'person_'+ i}>{person}</li>
);

// ReactDOM.render goes here:
ReactDOM.render(
<ul>{peopleList}</ul>,
 document.getElementById('app')
);                             
