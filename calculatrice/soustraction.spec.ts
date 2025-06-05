import { test, expect } from '@playwright/test';

test('soustraction simple 2 - 2 = 0', async ({ page }) => {
  await page.goto('http://localhost:5173'); 

  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: 'soustraction' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '=' }).click();

  const result = page.locator('.screen');
  await expect(result).toContainText('0');
});
