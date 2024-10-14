import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  projects: [
    {
      name: 'Chromium',
      use: { browserName: 'chromium' }
    },

    {
      name: 'Firefox',
      use: { browserName: 'firefox' }
    },

    {
      name: 'Webkit',
      use: { browserName: 'webkit' }
    }
  ],
  retries: 0,
  timeout: 60000,

  use: {
    // meghatározza, hogy mennyit várjon egy adott action-re, click, type stb. mielőtt hibára fut
    actionTimeout: 15000,
    headless: true,
    ignoreHTTPSErrors: true,
    screenshot: 'only-on-failure',
    // készíthet videót és képet is a tesztekről, de ezt most kikapcsoltuk
    video: 'retain-on-failure',
    viewport: { height: 720, width: 1280 }
  }
};

export default config;
