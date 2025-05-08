import { error } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { visitor } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	remove: async ({ params, locals }) => {
		if (!locals.userIsRoot) error(401, 'Nie wolno usuwać');

		await db.delete(visitor).where(eq(visitor.id, params.id));
	}
} satisfies Actions;
