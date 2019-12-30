import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import {
	CodesProvider,
	withCodesSelector,
} from '../../codes-provider';
import {
	PositionsProvider,
	withPositionsSelector,
} from '../../positions-provider';
import BettingWeizhiBlock from '../../betting-weizhi-block';
import BettingBallInput from '../../betting-ball-input';

const EnhancedBettingWeizhiBlock = withPositionsSelector(BettingWeizhiBlock);

const EnhancedBettingBallInput = withCodesSelector(BettingBallInput);

const propTypes = {
	labels: PropTypes.array,
	codes: PropTypes.array,
	configs: PropTypes.object,
	onUpdateCombination: PropTypes.func,
	onUpdatePosition: PropTypes.func,
};
const defaultProps = {
	labels: [],
	codes: [],
	configs: {},
	onUpdateCombination: () => {},
	onUpdatePosition: () => {},
};

class CodeBallBettingElement extends Component {
	render() {
		const {
			labels,
			codes,
			onUpdatePosition,
			onUpdateCombination,
			configs: {
				labelsWithCodes,
				quickOptions,
				positions,
			},
		} = this.props;

		return (
			<CodesProvider
				labels={labels}
				codes={codes}
				labelsWithCodes={labelsWithCodes}
				quickOptions={quickOptions}
				onUpdateCombination={onUpdateCombination}
			>
				<PositionsProvider
					positions={positions}
					onUpdatePosition={onUpdatePosition}
				>
					{/* REPLACE desktop/mobile */}
					<div>
						<EnhancedBettingWeizhiBlock />
						<EnhancedBettingBallInput
							renderBall={(code, codeIndex, rowIndex, onChange) => (
								// REPLACE ball style
								<i onClick={() => onChange(rowIndex, codeIndex)}>
									{code.name}
								</i>
							)}
						/>
					</div>
				</PositionsProvider>
			</CodesProvider>
		);
	}
}

CodeBallBettingElement.propTypes = propTypes;
CodeBallBettingElement.defaultProps = defaultProps;

export default CodeBallBettingElement;
