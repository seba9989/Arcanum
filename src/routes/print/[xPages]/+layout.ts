import { error } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const load = (async ({ params, url }) => {
	const xPages = Number(params.xPages);
	if (isNaN(xPages)) error(404, url.origin + '/visitors/print/[xPages - Must by a number]');

	return { xPages };
}) satisfies LayoutLoad;
