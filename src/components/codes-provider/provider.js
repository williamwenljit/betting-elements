import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import {
	generateData,
	generateDataForLabelsWithCodes,
	generateQuickSelectData,
	convertDataToCombination,
	generateNextData,
} from '../betting-element/utils';
import { CodesContext, } from './utils';

const propTypes = {
	positions: PropTypes.array,
	labelsWithCodes: PropTypes.array,
	onUpdateCombination: PropTypes.func,
};

class CodesProvider extends Component {
	constructor(props) {
		super(props);
		const {
			labels,
			codes,
			labelsWithCodes,
		} = props;

		this.state = {
			data: labelsWithCodes.length ? generateDataForLabelsWithCodes(labelsWithCodes) : generateData(labels, codes),
		};

		this._handleSelectCode = this._handleSelectCode.bind(this);
		this._handlePressQuickSelect = this._handlePressQuickSelect.bind(this);
	}

	_handleSelectCode(index1, index2) {
		const {
			codeSplitter,
		} = this.props;

		this.setState((prevState) => {
			prevState.data = generateNextData(index1, index2, prevState.data);

			return prevState;

		}, () => {
			this.props.onUpdateCombination(convertDataToCombination(this.state.data, codeSplitter));
		});
	}

	_handlePressQuickSelect(quickSelectActionType, quickSelectPositionName) {
		const {
			codeSplitter,
		} = this.props;

		this.setState((prevState) => {
			return {
				data: generateQuickSelectData({
					quickSelectActionType,
					quickSelectPositionName,
					data: prevState.data,
				}),
			};

		}, () => {
			this.props.onUpdateCombination(convertDataToCombination(this.state.data, codeSplitter));
		});
	}

	render() {
		const {
			children,
			quickOptions,
			...rest
		} = this.props;
		const {
			data,
		} = this.state;

		return (
			<CodesContext.Provider
				{...rest}
				value={{
					quickOptions,
					data,
					onSelectCode: this._handleSelectCode,
					onPressQuickSelect: this._handlePressQuickSelect,
				}}
			>
				{children}
			</CodesContext.Provider>
		);
	}

	componentDidMount() {
		const {
			data,
		} = this.state;
		const {
			onUpdateCombination,
		} = this.props;

		onUpdateCombination(data);
	}
}

CodesProvider.propTypes = propTypes;

export default CodesProvider;
