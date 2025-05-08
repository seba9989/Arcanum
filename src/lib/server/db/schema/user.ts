import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { session } from './index';
import { relations } from 'drizzle-orm';
import { uuid } from './utils';

export const user = sqliteTable('user', {
	id: uuid().primaryKey().default(crypto.randomUUID()),
	username: text().notNull().unique(),
	passwordHash: text().notNull(),
	admin: integer({ mode: 'boolean' }).default(false)
});
export const userRelations = relations(user, ({ many }) => ({
	session: many(session)
}));
