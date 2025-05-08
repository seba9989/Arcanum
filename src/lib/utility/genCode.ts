import type { CodeData } from '$lib/type/codeData';
import BwipJs from '@bwip-js/browser';

export const genCode = ({ type, uuid = crypto.randomUUID() }: Optional<CodeData, "uuid">) => {
	return BwipJs.toSVG({
		bcid: 'pdf417',
		height: 11,
		width: 60,
		text: JSON.stringify({
			type,
			uuid
		}),
		barcolor: '#000'
	});
};
