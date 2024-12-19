import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5174/";

test('allow user to sign in', async ({ page }) => {
    await page.goto(UI_URL);

    // Test to get the sign in button in page
    await page.getByRole("link", { name: "Sign In" }).click();
    // Test to check that the sign-in heading is visible
    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
    // Finds an element with the name of email and fills it 
    await page.locator("[name=email]").fill("123@test.com");
    // Finds an element with the name of password and fills it 
    await page.locator("[name=password]").fill("password123");
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
