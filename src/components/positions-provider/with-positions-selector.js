import React, { Component, } from 'react';
import { PositionsContext, } from './utils';

const withPositionsSelector = (WrappedComponent) => {
	class Enhanced extends Component {
		render() {
			return (
				<PositionsContext.Consumer>
					{({ positions, onPressCheckbox, }) => {
						if (!positions.length) {
							return null;
						}

						return (
							<WrappedComponent
								{...this.props}
								options={positions}
								onPressCheckbox={onPressCheckbox}
							/>
						);
					}}
				</PositionsContext.Consumer>
			);
		}
	};

	return Enhanced;
}

export default withPositionsSelector;
