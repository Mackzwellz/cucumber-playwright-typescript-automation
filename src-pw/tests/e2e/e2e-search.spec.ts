import { test, expect } from '@playwright/test';
import { HomePage } from '../../page-objects/bank/HomePage';

test.describe('Search results', () => {
  test('Should find test results', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.visit();
    await homePage.searchFor('bank');

    const numberOfLinks = await page.locator('li > a');
    await expect(numberOfLinks).toHaveCount(2);
  });
});
