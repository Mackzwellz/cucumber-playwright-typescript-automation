import { LaunchOptions } from '@playwright/test';

const browserOptions: LaunchOptions = {
  args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'],
  firefoxUserPrefs: {
    'media.navigator.permission.disabled': true,
    'media.navigator.streams.fake': true
  },
  slowMo: 0
};

export const config = {
  BASE_API_URL: 'https://catfact.ninja/',
  BASE_URL: 'https://playwright.dev',
  browser: process.env.BROWSER ?? 'chromium',
  browserOptions,
  IMG_THRESHOLD: { threshold: 0.4 }
};
