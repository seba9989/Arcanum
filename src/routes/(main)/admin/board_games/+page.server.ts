import { db } from '$lib/server/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const boardGames = await db.query.boardGame.findMany();

	return { boardGames };
}) satisfies PageServerLoad;
