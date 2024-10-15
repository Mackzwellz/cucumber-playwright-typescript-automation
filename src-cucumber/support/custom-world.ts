import { IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import * as messages from '@cucumber/messages';
import { APIRequestContext, BrowserContext, Page, PlaywrightTestOptions } from '@playwright/test';

export interface CucumberWorldConstructorParams {
  parameters: Record<string, string>;
}

export interface ICustomWorld extends World {
  context?: BrowserContext;
  debug: boolean;
  feature?: messages.Pickle;
  page?: Page;

  playwrightOptions?: PlaywrightTestOptions;
  server?: APIRequestContext;

  startTime?: Date;

  testName?: string;
  username?: string;
}

export class CustomWorld extends World implements ICustomWorld {
  context?: BrowserContext;

  debug = false;
  feature?: messages.Pickle;
  page?: Page;
  playwrightOptions?: PlaywrightTestOptions;
  server?: APIRequestContext;
  startTime?: Date;
  testName?: string;
  username?: string;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor
  constructor(options: IWorldOptions) {
    super(options);
  }
}

setWorldConstructor(CustomWorld);
