import { relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { uuid } from './utils';
import { boardGameLoan } from './index';

export const visitor = sqliteTable('visitor', {
	id: uuid().primaryKey(),
	firstName: text().notNull(),
	lastName: text().notNull(),
	phoneNumber: text()
	// TODO: child visitor
	// child: integer({ mode: 'boolean' }).notNull()
});
export const visitorRelations = relations(visitor, ({ many }) => ({
	boardGameLoan: many(boardGameLoan)
}));
