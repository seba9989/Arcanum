import { db } from '$lib/server/db';
import { fail } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { hash } from '@node-rs/argon2';
import { user } from '$lib/server/db/schema';

export const load = (async () => {
	const users = await db.query.user.findMany();

	return { users };
}) satisfies PageServerLoad;

export const actions = {
	create: async ({ request }) => {
		const form = await request.formData();
		const username = form.get('username') as string | null;
		const password = form.get('password') as string | null;

		if (!username || !password) return fail(400, { message: 'Nie podano username lub password' });

		const passwordHash = await hash(password, {
			// recommended minimum parameters
			memoryCost: 19456,
			timeCost: 2,
			outputLen: 32,
			parallelism: 1
		});

		const userId = crypto.randomUUID();

		await db.insert(user).values({ id: userId, username, passwordHash });
	}
} satisfies Actions;
