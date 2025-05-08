import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const loans = await db.query.boardGameLoan.findMany({
		with: { boardGame: true }
	});

	return { loans };
}) satisfies PageServerLoad;
