import { test, expect } from '@playwright/test';

test('addition simple 1 + 2 = 3', async ({ page }) => {
  await page.goto('http://localhost:5174'); 

  await page.getByRole('button', { name: '1' }).click();
  await page.getByRole('button', { name: 'sum' }).click();
  await page.getByRole('button', { name: '2' }).click();
  await page.getByRole('button', { name: '=' }).click();

  const result = page.locator('.screen');
  await expect(result).toContainText('3');
});
