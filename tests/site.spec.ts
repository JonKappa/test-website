import { expect, test } from '@playwright/test';

const pages = [
  { name: 'Projects', path: 'projects/' },
  { name: 'Contact', path: 'contact/' },
];

// Fail on any missing file (CSS, JS, images) or script error, e.g. from a wrong base path.
let problems: string[] = [];

test.beforeEach(async ({ page }) => {
  problems = [];
  page.on('response', (response) => {
    if (response.status() >= 400) problems.push(`${response.status()} ${response.url()}`);
  });
  page.on('pageerror', (error) => problems.push(`page error: ${error.message}`));
});

test.afterEach(() => {
  expect(problems).toEqual([]);
});

test('home page shows the nav, heading and footer', async ({ page }) => {
  await page.goto('./');

  await expect(page).toHaveTitle('Jonathan Capparell');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Home');

  const logoLink = page.getByRole('link', { name: 'JonKappa' });
  await expect(logoLink).toHaveAttribute('aria-current', 'page');
  await expect(logoLink.getByRole('img')).toHaveAttribute('src', /high-black-trans-logo\.png$/);

  const footer = page.locator('footer');
  await expect(footer).toContainText(`©${new Date().getFullYear()}`);
  await expect(footer).toContainText('All rights reserved.');
});

for (const { name, path } of pages) {
  test(`${name} link opens the ${name} page and marks it active`, async ({ page }) => {
    await page.goto('./');
    await page.getByRole('navigation').getByRole('link', { name }).click();

    await expect(page).toHaveURL(new RegExp(`/test-website/${path}$`));
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(name);
    await expect(page.getByRole('link', { name })).toHaveAttribute('aria-current', 'page');

    const logoLink = page.getByRole('link', { name: 'JonKappa' });
    await expect(logoLink).not.toHaveAttribute('aria-current');
    await expect(logoLink.getByRole('img')).toHaveAttribute('src', /high-white-trans-logo\.png$/);
  });
}

test('logo and footer links go back home', async ({ page }) => {
  await page.goto('./contact/');
  await page.getByRole('link', { name: 'JonKappa' }).click();
  await expect(page).toHaveURL(/\/test-website\/$/);

  await page.goto('./projects/');
  await page.locator('footer').getByRole('link', { name: 'Jonathan Capparell' }).click();
  await expect(page).toHaveURL(/\/test-website\/$/);
});

test('browser back returns to the previous page', async ({ page }) => {
  await page.goto('./');
  await page.getByRole('link', { name: 'Projects' }).click();
  await expect(page).toHaveURL(/\/projects\/$/);
  await page.getByRole('link', { name: 'Contact' }).click();
  await expect(page).toHaveURL(/\/contact\/$/);

  await page.goBack();
  await expect(page).toHaveURL(/\/projects\/$/);
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Projects');
});
