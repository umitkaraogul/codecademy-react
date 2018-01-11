/*
JSX elements can have event listeners, just like HTML elements can.
An event listener attribute's value should be a function.

Note that in HTML, event listener names are written in all lowercase, such as onclick or onmouseover.
 In JSX, event listener names are written in camelCase, such as onClick or onMouseOver.
*/

import React from 'react';
import ReactDOM from 'react-dom';

function makeDoggy(e) {
  // Call this extremely useful function on an <img>.
  // The <img> will become a picture of a doggy.
  e.target.setAttribute('src', 'https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img onClick={makeDoggy}
		src="https://s3.amazonaws.com/codecademy-content/courses/React/react_photo-kitty.jpg" 
		alt="kitty" />
);

ReactDOM.render(kitty, document.getElementById('app'));