import { boardGameLoan } from '$lib/server/db/schema';
import type { Actions, PageServerLoad } from './$types';
import { db } from '$lib/server/db';
import { createInsertSchema } from 'drizzle-arktype';
import { validForm } from '$lib/server/utils';
import { error } from '@sveltejs/kit';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

const formSchema = createInsertSchema(boardGameLoan);

export const actions = {
	default: async ({ request }) => {
		const form = await request.formData();
		const { data, errors } = validForm(formSchema, form);

		if (errors) error(400, errors.message);

		const visitor = await db.query.visitor.findFirst({
			where: (visitor, { eq }) => eq(visitor.id, data.visitorId)
		});
		if (!visitor) error(400, 'VisitorId nie jest przypisany do odwiedzającego');

		const boardGame = await db.query.boardGame.findFirst({
			where: (boardGame, { eq }) => eq(boardGame.id, data.boardGameId)
		});
		if (!boardGame) error(400, 'boardGameId nie jest przypisany do żadnej gry');

		await db.insert(boardGameLoan).values(data);

		return;
	}
} satisfies Actions;
