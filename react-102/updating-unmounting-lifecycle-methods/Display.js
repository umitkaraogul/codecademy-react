import React from 'react';

const style = {
	fontSize: 110,
	color:    'lightgrey',
	position: 'absolute',
	top: '30%'
};

export const Display = (props) => {
	return (
		<div style={style}>
			{props.number}
		</div>
	);
}

Display.propTypes = {
	number: React.PropTypes.number.isRequired
};