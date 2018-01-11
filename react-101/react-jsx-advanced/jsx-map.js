/*
.map in JSX
The array method .map() comes up often in React. It's good to get in the habit of using it alongside JSX.
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
