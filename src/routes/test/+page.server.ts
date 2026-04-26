import type { PageServerLoad } from './$types';
import { dev } from '$app/environment';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = () => {
	if (!dev) {
		throw redirect(308, '/');
	}
};
