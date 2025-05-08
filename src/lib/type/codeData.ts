import { type } from 'arktype';

const codeType = type("'visitor' | 'board_game'");

const codeDataSchema = type({
	type: codeType,
	uuid: 'string.uuid'
});

export type CodeData = typeof codeDataSchema.infer;

type Config = {
	type?: typeof codeType.infer;
};
export const codeDataValid = (data: unknown, config?: Config): data is CodeData => {
	const schema = type({
		type: config?.type ? type(`"${config.type}"`) : codeType,
		uuid: 'string.uuid'
	});

	const out = schema(data);

	if (out instanceof type.errors) return false;

	return true;
};
