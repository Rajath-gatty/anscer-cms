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

test("contact form shows inline zod validation messages", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/contact-us");

  await page.getByRole("button", { name: "Submit", exact: true }).click();

  await expect(page.getByText("First name is required.")).toBeVisible();
  await expect(page.getByText("Last name is required.")).toBeVisible();
  await expect(page.getByText("Company name is required.")).toBeVisible();
  await expect(page.getByText("Email address is required.")).toBeVisible();
  await expect(page.getByText("Inquiry type is required.")).toBeVisible();

  await page.getByLabel(/email address/i).fill("not-an-email");
  await page.getByRole("button", { name: "Submit", exact: true }).click();

  await expect(page.getByText("Enter a valid email address.")).toBeVisible();
});
