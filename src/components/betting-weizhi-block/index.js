import React, { Component, } from 'react';
import PropTypes from 'prop-types';

const PREFIX_CLASS = 'betting-weizhi-block';

const propTypes = {
	className: PropTypes.string,
	options: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string,
		isSelected: PropTypes.bool,
	})).isRequired,
	onPressCheckbox: PropTypes.func,
	description: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
	]),
};

const defaultProps = {
	options: [],
	description: '',
	onPressCheckbox: () => {},
};

class BettingWeizhiBlock extends Component {
	render() {
		const {
			className,
			options,
			onPressCheckbox,
			description,
		} = this.props;

		return (
			<div className={`${PREFIX_CLASS} ${className}`}>
				{options.map((option, index) => {
					return (
						<label key={option.name}>
							<input
								type="checkbox"
								checked={option.isSelected}
								onChange={() => onPressCheckbox(index)}
							/>
							{option.name}
						</label>
					);
				})}
				<div className={`${PREFIX_CLASS}__description`}>
					{description}
				</div>
			</div>
		);
	}


}

BettingWeizhiBlock.propTypes = propTypes;
BettingWeizhiBlock.defaultProps = defaultProps;

export default BettingWeizhiBlock;
