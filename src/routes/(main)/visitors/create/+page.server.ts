import { visitor } from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { createInsertSchema } from 'drizzle-arktype';
import { validForm } from '$lib/server/utils';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

const formSchema = createInsertSchema(visitor);

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const { data, errors } = validForm(formSchema, form);

		if (errors) error(400, errors.message);

		await db.insert(visitor).values(data);

		return;
	}
} satisfies Actions;
