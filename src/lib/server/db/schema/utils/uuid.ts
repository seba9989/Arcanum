import { text } from 'drizzle-orm/sqlite-core';

type UUID = ReturnType<typeof crypto.randomUUID>;

export const uuid = () => text().$type<UUID>();
