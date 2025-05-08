import { error, redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types';

export const load = (async (event) => {
	if (!event.locals.userIsRoot) {
		return error(401, 'Tylko root');
	}
	return { user: event.locals.user, userIsRoot: event.locals.userIsRoot };
}) satisfies LayoutServerLoad;
