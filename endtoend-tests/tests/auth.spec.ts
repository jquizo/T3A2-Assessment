import { test, expect } from '@playwright/test';

const UI_URL = "http://localhost:5174/";

test('allow user to sign in', async ({ page }) => {
    await page.goto(UI_URL);

    // Test to get the sign in button in page
    await page.getByRole("link", { name: "Sign In" }).click();
    // Test to check that the sign-in heading is visible
    await expect(page.getByRole("heading", { name: "Sign In" })).toBeVisible();
    // Finds an element with the string (email) and fills it 
    await page.locator("[name=email]").fill("2@22.com");
    // Finds an element with the string (password)) and fills it 
    await page.locator("[name=password]").fill("password123");

    // Finds button element with string (login) and clicks it 
    await page.getByRole("button", { name: "Login" }).click();

    // Confirms user is signed in
    await expect(page.getByText("Sign in Successful!")).toBeVisible();
});

test('allow user to register', async ({ page }) => {
  // Generates a random email string for testing
  const testEmail = `test_register_${
    Math.floor(Math.random() * 90000) + 10000
  }@test.com`;
  await page.goto(UI_URL);
  // Finds link element with string (Sign In) and clicks it
  await page.getByRole("link", { name: "Sign In" }).click();
  // Finds link element with string (Create and account here) and clicks it
  await page.getByRole("link", { name: "Create an account here" }).click();
  // Finds an element equal to the name 'firstName' and fills it
  await page.locator("[name=firstName]").fill("test_firstName");
  // Finds an element equal to the name 'lastName' and fills it
  await page.locator("[name=lastName]").fill("test_lastName");
  // Finds an element equal to the name 'email' and fills it
  await page.locator("[name=email]").fill(testEmail);
  // Finds an element equal to the name 'password' and fills it
  await page.locator("[name=password]").fill("password123");
  // Finds an element equal to the name 'confirmPassword' and fills it
  await page.locator("[name=confirmPassword]").fill("password123"); 
  // Finds button element with string (Create Account) and clicks it 
  await page.getByRole("button", { name: "Create Account" }).click();
  // Confirms user is registered
  await expect(page.getByText("Registration Success!")).toBeVisible();

});

