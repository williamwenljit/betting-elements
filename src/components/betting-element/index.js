import { LotteryClassIdEnum, } from '../../lib/game-id-enums';

import sscBettingElementLocator from './shishicai';
import IIX5BettingElementLocator from './11x5';

function getStandardBettingElement(classId, lotteryId, playId) {
	switch (classId) {
		case LotteryClassIdEnum.SSC:
			return sscBettingElementLocator.get(playId);

		case LotteryClassIdEnum.IIX5:
			return IIX5BettingElementLocator.get(playId);

		default:
			throw new Error(`StandardBettingElement do not support classId [${classId}]`);
	}
}

export default {
	get: getStandardBettingElement,
};
