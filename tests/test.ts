import { base } from '$app/paths';
import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto(base + '/');
	await expect(page.getByRole('heading', { name: 'Welcome to SvelteKit' })).toBeVisible();
});
