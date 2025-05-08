import type { Handle } from '@sveltejs/kit';
import * as auth from '$lib/server/auth.js';
import { env } from '$env/dynamic/private';

const handleAuth: Handle = async ({ event, resolve }) => {
	const sessionToken = event.cookies.get(auth.sessionCookieName);

	if (!sessionToken) {
		event.locals.user = null;
		event.locals.session = null;
		return resolve(event);
	}

	const { session, user } = await auth.validateSessionToken(sessionToken);

	if (session) {
		auth.setSessionTokenCookie(event, sessionToken, session.expiresAt);
	} else {
		auth.deleteSessionTokenCookie(event);
	}

	event.locals.user = user;
	event.locals.session = session;
	if (!env.ROOT_USERNAME) throw new Error('ROOT_USERNAME is not set');
	event.locals.userIsRoot = user?.username == env.ROOT_USERNAME;
	return resolve(event);
};

export const handle: Handle = handleAuth;
