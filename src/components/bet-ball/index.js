import React from 'react';
import PropTypes from 'prop-types';
import withPopularLabel from './with-popular-label';
import withOddLabel from './with-odd-label';

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.node,
};

const BetBall = ({
	children,
	className = '',
}) => {
	return (
		<div className={`bet-ball ${className}`}>
			{children}
		</div>
	);
}

BetBall.propTypes = propTypes;

export {
	withPopularLabel,
	withOddLabel,
};

export default BetBall;
