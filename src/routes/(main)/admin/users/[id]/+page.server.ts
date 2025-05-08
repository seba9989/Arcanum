import { db } from '$lib/server/db';
import { error, fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { hash } from '@node-rs/argon2';
import { user } from '$lib/server/db/schema';
import { eq } from 'drizzle-orm';

export const load = (async ({ params }) => {
	const openUser = await db.query.user.findFirst({
		where: (user, { eq }) => eq(user.id, params.id)
	});

	return { openUser };
}) satisfies PageServerLoad;

export const actions = {
	remove: async ({ params, locals }) => {
		if (!locals.userIsRoot) error(401, 'Nie wolno usuwać');

		await db.delete(user).where(eq(user.id, params.id));
	}
} satisfies Actions;
