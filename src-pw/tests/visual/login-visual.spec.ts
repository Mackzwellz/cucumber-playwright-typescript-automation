/* exported page */
import { test } from '@playwright/test';

import { HomePage } from '../../page-objects/bank/HomePage';
import { LoginPage } from '../../page-objects/bank/LoginPage';

test.describe.parallel.only('Login Page Visual Tests', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);

    await homePage.visit();
    await homePage.clickOnSignIn();
  });

  test('Login Form', async () => {
    await loginPage.snapshotLoginForm();
  });

  test('Login Error Message', async () => {
    await loginPage.login('Fail', 'some invalid password');
    await loginPage.snapshotErrorMessage();
  });
});
