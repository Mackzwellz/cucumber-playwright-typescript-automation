import { Given } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { ICustomWorld } from '../support/custom-world';

Given('A cat fact is received', async function (this: ICustomWorld) {
  const response = await this.server?.get('facts');
  expect(response).toBeDefined();
});
