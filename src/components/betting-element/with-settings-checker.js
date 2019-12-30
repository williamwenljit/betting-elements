import React from 'react';
import {
	QuickTypeEnum,
	generateNextData,
	convertDataToCombination as defaultConvertDataToCombination,
} from './utils';

const withSettingsChecker = (labels = [], codes = [], externalConfigs = {}) => (WrappedComponent) => {
	const defaultConfigs = {
		labelsWithCodes: [],
		positions: [],
		minPositionCount: 0,
		quickOptions: [
			QuickTypeEnum.ALL,
			QuickTypeEnum.BIG,
			QuickTypeEnum.SMALL,
			QuickTypeEnum.ODD,
			QuickTypeEnum.EVEN,
			QuickTypeEnum.NONE,
		],
		codeSplitter: '',
		getNextData: generateNextData,
		convertDataToCombination: defaultConvertDataToCombination,
	};

	// CHECK valid configs
	const configs = Object.assign(defaultConfigs, externalConfigs);

	function Enhanced(props) {
		return (
			<WrappedComponent
				{...props}
				labels={labels}
				codes={codes}
				configs={configs}
			/>
		);
	}

	return Enhanced;
};

export default withSettingsChecker;
