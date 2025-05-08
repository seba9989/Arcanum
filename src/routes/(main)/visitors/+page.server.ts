import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const visitors = await db.query.visitor.findMany();

	return { visitors };
}) satisfies PageServerLoad;
