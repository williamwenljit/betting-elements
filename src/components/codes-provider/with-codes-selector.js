import React, { Component, } from 'react';
import { CodesContext, } from './utils';

const withCodesSelector = (WrappedComponent) => {
	class Enhanced extends Component {
		render() {
			return (
				<CodesContext.Consumer>
					{({ data, quickOptions, onSelectCode, onPressQuickSelect, }) => {
						return (
							<WrappedComponent
								{...this.props}
								data={data}
								quickOptions={quickOptions}
								onSelectCode={onSelectCode}
								onPressQuickSelect={onPressQuickSelect}
							/>
						);
					}}
				</CodesContext.Consumer>
			);
		}
	};

	return Enhanced;
}

export default withCodesSelector;
