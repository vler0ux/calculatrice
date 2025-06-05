import { test, expect } from '@playwright/test';

test('multiplication simple 2x2 = 4', async ({ page }) => {
  await page.goto('http://localhost:5173'); 

  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'multiplication' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '=' }).click();

  const result = page.locator('.screen');
  await expect(result).toContainText('4');
});
