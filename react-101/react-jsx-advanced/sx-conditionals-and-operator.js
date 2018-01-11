/*
JSX Conditionals: &&
Like the ternary operator, && is not React-specific, but it shows up in React surprisingly often.
&& works best in conditionals that will sometimes do an action, but other times do nothing at all.
*/


import React from 'react';
import ReactDOM from 'react-dom';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
     {!judgmental && <li>Nacho Cheez Straight Out The Jar</li> }
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

ReactDOM.render(
	favoriteFoods, 
	document.getElementById('app')
);