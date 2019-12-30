import React, { Component, } from 'react';
import PropTypes from 'prop-types';
import { HorizontalSplitRow, } from '../direction-split-row';
import compose from 'lodash/fp/compose';
import BetBall, { withOddLabel, withPopularLabel, } from '../bet-ball';
import './style.css';

const EnhancedBetBall = compose(
	withPopularLabel,
	withOddLabel,
)(BetBall);

const PREFIX_CLASS = 'betting-ball-input';

const BLOCK_PREFIX_CLASS = 'betting-balls-block';

const QUICK_PREFIX_CLASS = 'quick-options-block';

const propTypes = {
	data: PropTypes.array,
	quickOptions: PropTypes.array,
	onSelectCode: PropTypes.func,
	onSelectPosition: PropTypes.func,
	onPressQuickOption: PropTypes.func,
};
const defaultProps = {
	data: [],
	quickOptions: [],
	onSelectCode: () => {},
	onPressQuickOption: () => {},
};

class BettingBallInput extends Component {
	render() {
		const {
			data,
			quickOptions,
			renderBall,
			onSelectCode,
			onPressQuickSelect,
		} = this.props;

		return (
			<div className={PREFIX_CLASS}>
				{data.map(({ name: codeLabel, codes }, rowIndex) => {
					return (
						<HorizontalSplitRow
							className={`${PREFIX_CLASS}__row`}
							key={`betting-row-${codeLabel}`}
							leftSide={(
								<div className={BLOCK_PREFIX_CLASS}>
									<EnhancedBetBall className={`${BLOCK_PREFIX_CLASS}__title`}>
										{codeLabel}
									</EnhancedBetBall>
									<div className={`${BLOCK_PREFIX_CLASS}__balls-wrapper`}>
										{codes.map((code, codeIndex) => {
											return (
												<EnhancedBetBall
													key={`code__${code.name}`}
													className={`${BLOCK_PREFIX_CLASS}__ball`}
												>
													{renderBall(code, codeIndex, rowIndex, onSelectCode)}
												</EnhancedBetBall>
											);
										})}
									</div>
								</div>
							)}
							rightSide={(
								<div className={QUICK_PREFIX_CLASS}>
									{quickOptions.map((quickSelectActionType) => {
										return (
											<div
												key={`quick-option__${quickSelectActionType}`}
												className={`${QUICK_PREFIX_CLASS}__option`}
												onClick={() => onPressQuickSelect(quickSelectActionType, codeLabel)}
											>
												{quickSelectActionType}
											</div>
										);
									})}
								</div>
							)}
						/>
					);
				})}
			</div>
		);
	}
}

BettingBallInput.propTypes = propTypes;
BettingBallInput.defaultProps = defaultProps;

export default BettingBallInput;
