import { test } from '@playwright/test';

import { Navbar } from '../../page-objects/bank/components/Navbar';
import { HomePage } from '../../page-objects/bank/HomePage';
import { LoginPage } from '../../page-objects/bank/LoginPage';
import { TransferFundsPage } from '../../page-objects/bank/TransferFundsPage';

test.describe('Transfer Funds and Make Payments', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let transferFundsPage: TransferFundsPage;
  let navbar: Navbar;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    transferFundsPage = new TransferFundsPage(page);
    navbar = new Navbar(page);

    await homePage.visit();
    await homePage.clickOnSignIn();
    await loginPage.login('username', 'password');
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html');
  });

  test('Transfer funds', async ({ page }) => {
    await navbar.clickOnTab('Transfer Funds');

    /* await page.selectOption('#tf_fromAccountId', '2')
    await page.selectOption('#tf_toAccountId', '3')
    await page.fill('#tf_amount', '500')
    await page.fill('#tf_description', 'Test message')
    await page.click('#btn_submit') */
    await transferFundsPage.createTransfer();
    await transferFundsPage.clickOnSubmit();

    /* const boardHeader = await page.locator('h2.board-header')
    await expect(boardHeader).toContainText('Verify') */
    await transferFundsPage.assertVerification();

    /* await page.click('#btn_submit') */
    await transferFundsPage.clickOnSubmit();

    /* const message = await page.locator('.alert-success')
    await expect(message).toContainText(
      'You successfully submitted your transaction.'
    ) */
    await transferFundsPage.assertSubmitTransaction();
  });
});
