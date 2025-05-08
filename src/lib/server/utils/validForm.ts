import { type, type Type } from 'arktype';

type TryCatch<T> =
	| {
			data: T;
			errors?: never;
	  }
	| {
			data?: never;
			errors: {
				message: string;
			};
	  };

export function validForm<TSchema extends Type>(
	schema: TSchema,
	form: FormData
): TryCatch<TSchema['infer']> {
	const data: Record<string, unknown> = {};

	form.forEach((value, key) => {
		data[key] = value;
	});

	const out = schema(data);

	if (out instanceof type.errors) {
		return { errors: { message: out.summary } };
	} else {
		return { data: out };
	}
}
