import { expect, Locator, Page } from '@playwright/test';

import { AbstractPage } from './AbstractPage';

export class LoginPage extends AbstractPage {
  readonly errorMessage: Locator;
  readonly loginForm: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;
  // Define Selectors
  // readonly page: Page --> ki kell venni ha a super(page)-t használjuk
  readonly usernameInput: Locator;

  // Init selectors using constructor
  constructor(page: Page) {
    super(page);
    this.usernameInput = page.locator('#user_login');
    this.passwordInput = page.locator('#user_password');
    this.submitButton = page.locator('text=Sign in');
    this.errorMessage = page.locator('.alert-error');
    this.loginForm = page.locator('#login-form');
  }

  async assertErrorMessage() {
    await expect(this.errorMessage).toContainText('Login and/or password are wrong.');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }

  async snapshotErrorMessage() {
    expect(await this.errorMessage.screenshot()).toMatchSnapshot('login-error.png');
  }

  async snapshotLoginForm() {
    expect(await this.passwordInput.screenshot()).toMatchSnapshot('login-form.png');
  }
}
