import { test, expect } from "@playwright/test";

test.describe("basic flow", () => {
  test("it should open the dropdown and close when clicking", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    const menuButton = await page.locator("#menu-button");
    menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "true");

    menuButton.click();
    await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  });

  test("should navigate to the Autism page", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.locator("text=ASD").click();

    await expect(page).toHaveURL("http://localhost:3000/autism");
    await expect(page.locator("h1")).toContainText("What is Autism?");
  });

  test("it should open and close the definition when clicking", async ({ page }) => {
    await page.goto("http://localhost:3000/asd");

    const dt = await page.locator("dt >> nth=0");
    const dd = await page.locator("dd >> nth=0");

    const button = await page.locator("section button >> nth=0");

    dt.click();
    await expect(button).toHaveAttribute("aria-expanded", "true");

    dt.click();
    await expect(button).toHaveAttribute("aria-expanded", "false");
  });

  test("it should go to the join page and click the discord link", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.locator("text=Find out more").click;

    await page.locator("text=Join Discord server").click();
    await expect(page).toHaveURL("https://discord.com/invite/48kqk6KcZ8");
  });
});
