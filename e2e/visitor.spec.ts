import { expect, test } from "@playwright/test";

test("visitor can click a neuron, open a project and send contact form", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Arthur Njouonang" })).toBeVisible();

  await page.getByRole("link", { name: /Projets|Projects/ }).first().click();
  await expect(page.getByRole("heading", { name: /CareerAI|CRM|Nova|ProTech/ }).first()).toBeVisible();

  await page.getByRole("link", { name: /Voir le projet|View project/ }).first().click();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();

  await page.goto("/contact");
  await page.getByLabel(/Nom|Name/).fill("Recruteur Test");
  await page.getByLabel(/Email/).fill("recruteur@example.com");
  await page.getByLabel(/Sujet|Subject/).fill("Opportunité fullstack");
  await page.getByLabel(/Message/).fill("Bonjour Arthur, pouvons-nous échanger sur un poste ?");
  await page.getByRole("button", { name: /Envoyer|Send/ }).click();
  await expect(page.getByText(/Message envoyé|Message sent/)).toBeVisible();
});
