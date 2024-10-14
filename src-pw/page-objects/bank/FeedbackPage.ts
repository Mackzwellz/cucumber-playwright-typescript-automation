import { expect, Locator, Page } from "@playwright/test";

export class FeedbackPage {
  readonly clearButton: Locator;
  readonly commentInput: Locator;
  readonly emailInput: Locator;
  readonly feedbackTitle: Locator;
  readonly nameInput: Locator;
  readonly page: Page;
  readonly subjectInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.nameInput = page.locator("#name");
    this.emailInput = page.locator("#email");
    this.subjectInput = page.locator("#subject");
    this.commentInput = page.locator("#comment");
    this.clearButton = page.locator("input[name='clear']");
    this.submitButton = page.locator("input[name='submit']");
    this.feedbackTitle = page.locator("#feedback-title");
  }

  async assertReset() {
    await expect(this.nameInput).toBeEmpty();
    await expect(this.commentInput).toBeEmpty();
  }

  async clearForm() {
    await this.clearButton.click();
  }

  async feedBackFromSent() {
    await expect(this.feedbackTitle).toBeVisible();
  }

  async fillForm(name: string, email: string, subject: string, comment: string) {
    await this.nameInput.type(name);
    await this.emailInput.type(email);
    await this.subjectInput.type(subject);
    await this.commentInput.type(comment);
  }

  async submitForm() {
    await this.submitButton.click();
  }
}
