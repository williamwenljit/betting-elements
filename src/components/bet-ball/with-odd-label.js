import React, { Component, } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.any,
	hasOddLabel: PropTypes.bool,
	odd: PropTypes.number,
};

const withOddLabel = (WrappedComponent) => {
	class Enhanced extends Component {
		render() {
			const {
				children,
				hasOddLabel,
				odd,
				...rest
			} = this.props;

			return (
				<WrappedComponent {...rest}>
					{children}
					{hasOddLabel ? <div>{odd}</div> : null}
				</WrappedComponent>
			);
		}
	};

	Enhanced.propTypes = propTypes;

	return Enhanced;
}

export default withOddLabel;
