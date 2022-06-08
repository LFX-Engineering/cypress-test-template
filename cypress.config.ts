import { defineConfig } from 'cypress';

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  defaultCommandTimeout: 10000,
  fixturesFolder: './fixtures',
  screenshotsFolder: './screenshots',
  videosFolder: './videos',
  e2e: {
    baseUrl: 'http://localhost:4200'
  }
});
