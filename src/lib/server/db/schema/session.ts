import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';
import { user } from './index';
import { relations } from 'drizzle-orm';
import { uuid } from './utils';

export const session = sqliteTable('session', {
	id: uuid().primaryKey().default(crypto.randomUUID()),
	userId: text('user_id')
		.notNull()
		.references(() => user.id, {onUpdate: "cascade"}),
	expiresAt: integer({ mode: 'timestamp' }).$default(() => new Date())
});
export const sessionRelations = relations(session, ({ one }) => ({
	user: one(user, {
		fields: [session.userId],
		references: [user.id]
	})
}));
