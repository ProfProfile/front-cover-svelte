import type { PageServerLoad } from './$types';
import { knowledges } from './data';

export const load = (async () => {
    return { knowledges };
}) satisfies PageServerLoad;