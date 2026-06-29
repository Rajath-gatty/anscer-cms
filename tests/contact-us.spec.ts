import { expect, test } from "@playwright/test";

test("contact page matches the Figma right-side card column", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 966 });
  await page.goto("http://127.0.0.1:3000/contact-us");

  const contactColumn = page
    .locator("aside")
    .filter({ hasText: "Talk To Our Team" });
  const firstCard = contactColumn.getByRole("article").first();
  const serviceRequest = contactColumn.getByRole("link", {
    name: /Submit Service Request/i,
  });

  await expect(contactColumn).toBeVisible();
  await expect(contactColumn.getByRole("article")).toHaveCount(3);
  await expect(serviceRequest).toBeVisible();

  const columnBox = await contactColumn.boundingBox();
  const firstCardBox = await firstCard.boundingBox();

  expect(columnBox?.width).toBeGreaterThanOrEqual(400);
  expect(columnBox?.width).toBeLessThanOrEqual(430);
  expect(firstCardBox?.height).toBeGreaterThanOrEqual(130);
});
