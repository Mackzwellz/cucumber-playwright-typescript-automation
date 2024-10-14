import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly linkFeedback: Locator;
  readonly page: Page;
  readonly searchBox: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.signInButton = page.locator('#signin_button');
    this.searchBox = page.locator('#searchTerm');
    this.linkFeedback = page.locator('#feedback');
  }

  async clickOnFeedback() {
    await this.linkFeedback.click();
  }

  async clickOnSignIn() {
    await this.signInButton.click();
  }

  async searchFor(phrase: string) {
    await this.searchBox.type(phrase);
    await this.page.keyboard.press('Enter');
  }

  async visit() {
    await this.page.goto('http://zero.webappsecurity.com');
  }
}
