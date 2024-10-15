import { expect, Locator, Page } from '@playwright/test';

export class TransferFundsPage {
  readonly amountInput: Locator;
  readonly boardHeader: Locator;
  readonly descriptionInput: Locator;
  readonly fromAccountSelectbox: Locator;
  readonly message: Locator;
  readonly toAccountSelectbox: Locator;
  readonly transferSubmitButton: Locator;

  constructor(page: Page) {
    this.fromAccountSelectbox = page.locator('#tf_fromAccountId');
    this.toAccountSelectbox = page.locator('#tf_toAccountId');
    this.amountInput = page.locator('#tf_amount');
    this.descriptionInput = page.locator('#tf_description');
    this.transferSubmitButton = page.locator('#btn_submit');
    this.boardHeader = page.locator('h2.board-header');
    this.message = page.locator('.alert-success');
  }

  async assertSubmitTransaction() {
    await expect(this.message).toContainText('You successfully submitted your transaction.');
  }

  async assertVerification() {
    await expect(this.boardHeader).toContainText('Verify');
  }

  async clickOnSubmit() {
    await this.transferSubmitButton.click();
  }

  async createTransfer() {
    await this.fromAccountSelectbox.selectOption('2');
    await this.toAccountSelectbox.selectOption('3');
    await this.amountInput.fill('500');
    await this.descriptionInput.fill('Test message');
  }
}
