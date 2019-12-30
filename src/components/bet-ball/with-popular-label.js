import React, { Component, } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
	children: PropTypes.any,
	hasPopularLabel: PropTypes.bool,
	popular: PropTypes.number,
	unpopular: PropTypes.number,
};

const withPopularLabel = (WrappedComponent) => {
	class Enhanced extends Component {
		constructor() {
			super();

			this._renderLabel = this._renderLabel.bind(this);
		}

		_renderLabel() {
			const {
				popular,
				unpopular,
			} = this.props;

			return (
				<div>
					<div>{popular}</div>
					<div>{unpopular}</div>
				</div>
			);
		}

		render() {
			const {
				children,
				hasPopularLabel,
				...rest
			} = this.props;

			return (
				<WrappedComponent {...rest}>
					{children}
					{hasPopularLabel ? this._renderLabel() : null}
				</WrappedComponent>
			);
		}
	};

	Enhanced.propTypes = propTypes;

	return Enhanced;
}

export default withPopularLabel;
