import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("has title", async ({ page }) => {
  await page.goto("/about");

  await expect(page).toHaveTitle(/IMH | About Us/);
});

test("has heading", async ({ page }) => {
  await page.goto("/about");

  await expect(
    page.getByRole("heading", {
      name: "About Us",
    }),
  ).toBeVisible();
});

test("should not have any automatically detectable accessibility issues", async ({
  page,
}) => {
  await page.goto("/about");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
