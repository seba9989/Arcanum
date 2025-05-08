import { relations } from 'drizzle-orm';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { uuid } from './utils';
import { boardGameLoan } from './index';

export const boardGame = sqliteTable('board_game', {
	id: uuid().primaryKey(),
	title: text().notNull()
});
export const boardGameRelations = relations(boardGame, ({ many }) => ({
	boardGameLoan: many(boardGameLoan)
}));
