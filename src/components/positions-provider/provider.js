import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { PositionsContext, } from './utils';

const propTypes = {
	positions: PropTypes.array,
	onUpdatePosition: PropTypes.func,
};

class PositionsProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {
			positions: props.positions || [],
		};

		this._handleSelectPosition = this._handleSelectPosition.bind(this);
	}

	_handleSelectPosition(index) {
		console.log('index', index);

		this.setState((prevState) => {
			const isSelected = prevState.positions[index].isSelected;

			prevState.positions[index].isSelected = !isSelected;

			return prevState;

		}, () => {
			this.props.onUpdatePosition(this.state.positions);
		});
	}

	render() {
		const {
			...rest
		} = this.props;
		const {
			positions,
		} = this.state;

		return (
			<PositionsContext.Provider
				value={{
					positions,
					onPressCheckbox: this._handleSelectPosition,
				}}
				{...rest}
			/>
		);
	}

	componentDidMount() {
		const {
			positions,
		} = this.state;
		const {
			onUpdatePosition,
		} = this.props;

		if (positions.length > 0) {
			onUpdatePosition(positions);
		}
	}
}

PositionsProvider.propTypes = propTypes;

export default PositionsProvider;
