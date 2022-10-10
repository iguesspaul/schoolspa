import { error } from '@sveltejs/kit';
import { getTasks } from '../../backend/getTasks';
import { APIKEY } from '$env/static/private';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return await getTasks(APIKEY);
	throw error(404, 'Not found');
}
