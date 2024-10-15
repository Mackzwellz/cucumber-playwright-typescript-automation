import { expect, Locator, Page } from '@playwright/test';

export class PaymentPage {
  readonly accountSelectbox: Locator;
  readonly amountInput: Locator;
  readonly dateInput: Locator;
  readonly descriptionInput: Locator;
  readonly message: Locator;
  readonly page: Page;
  readonly payeeDetail: Locator;
  readonly payeeDetailButton: Locator;
  readonly payeeSelectbox: Locator;
  readonly submitPaymentButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.payeeSelectbox = page.locator('#sp_payee');
    this.payeeDetailButton = page.locator('#sp_get_payee_details');
    this.payeeDetail = page.locator('#sp_payee_details');
    this.accountSelectbox = page.locator('#sp_account');
    this.amountInput = page.locator('#sp_amount');
    this.dateInput = page.locator('#sp_date');
    this.descriptionInput = page.locator('#sp_description');
    this.submitPaymentButton = page.locator('#pay_saved_payees');
    this.message = page.locator('#alert_content');
  }

  async assertSuccessMessage() {
    await expect(this.message).toBeVisible();
    await expect(this.message).toContainText('The payment was successfully submitted.');
  }

  async createPayment() {
    await this.payeeSelectbox.selectOption('apple');
    await this.payeeDetailButton.click();
    await expect(this.payeeDetail).toBeVisible();
    await this.accountSelectbox.selectOption('6');
    await this.amountInput.fill('500');
    await this.dateInput.fill('2022-09-12');
    await this.descriptionInput.fill('Test description');
    await this.submitPaymentButton.click();
  }
}
