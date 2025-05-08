import { relations } from 'drizzle-orm';
import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';
import { uuid } from './utils';
import { boardGame, visitor } from './index';

export const boardGameLoan = sqliteTable('board_game_loan', {
	id: uuid().default(crypto.randomUUID()).primaryKey(),
	boardGameId: uuid()
		.references(() => boardGame.id, { onUpdate: 'cascade' })
		.notNull(),
	visitorId: uuid()
		.references(() => visitor.id, { onUpdate: 'cascade' })
		.notNull(),
	loans_at: integer({ mode: 'timestamp' }).$default(() => new Date()),
	returned_at: integer({ mode: 'timestamp' })
});
export const boardGameLoansRelations = relations(boardGameLoan, ({ one }) => ({
	boardGame: one(boardGame, {
		fields: [boardGameLoan.boardGameId],
		references: [boardGame.id]
	}),
	visitor: one(visitor, {
		fields: [boardGameLoan.visitorId],
		references: [visitor.id]
	})
}));
