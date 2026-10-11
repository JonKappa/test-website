import { defineConfig, devices } from '@playwright/test';

const port = 4321;

export default defineConfig({
  testDir: './tests',
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL: `http://localhost:${port}/test-website/`,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Lets an environment with its own Chromium (e.g. a CI image) skip `npx playwright install`.
        launchOptions: { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH || undefined },
      },
    },
  ],
  // Test the production build, served under the same /test-website base path as GitHub Pages.
  // --ignore-lock keeps `astro preview` in the foreground (Astro backgrounds it when an AI agent
  // runs it), so Playwright can wait for it and stop it when the tests finish.
  webServer: {
    command: `npm run build && npx astro preview --port ${port} --ignore-lock`,
    url: `http://localhost:${port}/test-website/`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
