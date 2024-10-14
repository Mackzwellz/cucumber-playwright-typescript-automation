import { test } from '@playwright/test';

import { Navbar } from '../../page-objects/bank/components/Navbar';
import { HomePage } from '../../page-objects/bank/HomePage';
import { LoginPage } from '../../page-objects/bank/LoginPage';
import { PaymentPage } from '../../page-objects/bank/PaymentPage';

test.describe('New Payment', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;
  let paymentPage: PaymentPage;
  let navbar: Navbar;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    paymentPage = new PaymentPage(page);
    navbar = new Navbar(page);

    await homePage.visit();
    await homePage.clickOnSignIn();
    await loginPage.login('username', 'password');
    await page.goto('http://zero.webappsecurity.com/bank/transfer-funds.html');
  });

  test('Should send new payment', async ({ page }) => {
    await navbar.clickOnTab('Pay Bills');
    await paymentPage.createPayment();
    await paymentPage.assertSuccessMessage();
  });
});
