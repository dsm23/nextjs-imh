import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("has title", async ({ browserName, page }) => {
  test.fixme(browserName === "firefox", "not currently rendering in firefox");

  await page.goto("/contact");

  await expect(page).toHaveTitle(/IMH | Contact/);
});

test("has heading", async ({ browserName, page }) => {
  test.fixme(browserName === "firefox", "not currently rendering in firefox");

  await page.goto("/contact");

  await expect(
    page.getByRole("heading", {
      name: "Contact Us",
    }),
  ).toBeVisible();
});

test("should not have any automatically detectable accessibility issues", async ({
  browserName,
  page,
}) => {
  test.fixme(browserName === "firefox", "not currently rendering in firefox");

  await page.goto("/contact");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
