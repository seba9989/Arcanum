import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { validForm } from '$lib/server/utils';
import { db } from '$lib/server/db';
import { boardGame } from '$lib/server/db/schema';
import { createInsertSchema } from 'drizzle-arktype';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

const formSchema = createInsertSchema(boardGame);

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();

		const { data, errors } = validForm(formSchema, form);

		if (errors) error(400, errors.message);

		console.log(data);

		try {
			await db.insert(boardGame).values(data);
		} catch (e) {
			console.log(e);
		}

		// if (out instanceof type.errors) error(400, 'Form data error');

		// console.log(formSchema.toJsonSchema());

		return;
	}
} satisfies Actions;
