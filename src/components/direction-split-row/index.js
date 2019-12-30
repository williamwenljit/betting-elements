import React, { Component, } from 'react';
import './style.css';

const PREFIX_CLASS = 'direction-split-row';

class DirectionSplitRow extends Component {
	render() {
		const {
			firstSide,
			secondSide,
			className = '',
		} = this.props;

		return (
			<div className={`${PREFIX_CLASS} ${className}`}>
				<div>{firstSide}</div>
				<div>{secondSide}</div>
			</div>
		);
	}

	shouldComponentUpdate() {
		return false;
	}
}

const VerticalSplitRow = ({ className = '', topSide, bottomSide, }) => (
	<DirectionSplitRow
		className={`vertical-split-row ${className}`}
		firstSide={topSide}
		secondSide={bottomSide}
	/>
);

const HorizontalSplitRow = ({ className = '', leftSide, rightSide, }) => (
	<DirectionSplitRow
		className={`horizontal-split-row ${className}`}
		firstSide={leftSide}
		secondSide={rightSide}
	/>
);

export {
	VerticalSplitRow,
	HorizontalSplitRow,
};
