import { chromium } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const html = path.join(root, "scripts", "protech-phones.html");
const outDir = path.join(root, "public", "projects", "protech");

const screens = [
  { id: "login", file: "login.png" },
  { id: "home", file: "home.png" },
  { id: "directory", file: "directory.png" },
  { id: "needs", file: "needs.png" },
];

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
await page.goto(`file:///${html.replaceAll("\\", "/")}`);
await mkdir(outDir, { recursive: true });

for (const screen of screens) {
  await page.evaluate((id) => {
    document.querySelectorAll(".board").forEach((el) => el.classList.remove("active"));
    document.getElementById(id)?.classList.add("active");
  }, screen.id);
  await page.locator(`#${screen.id} .phone`).screenshot({
    path: path.join(outDir, screen.file),
  });
}

await page.evaluate(() => {
  document.querySelectorAll(".board").forEach((el) => el.classList.remove("active"));
  const cover = document.getElementById("cover");
  cover.classList.add("active");
  for (const frame of cover.querySelectorAll(".frame")) {
    const src = frame.getAttribute("data-src");
    const phone = document.querySelector(`#${src} .phone`);
    if (phone) frame.appendChild(phone.cloneNode(true));
  }
});
await page.setViewportSize({ width: 1440, height: 810 });
await page.locator("#cover").screenshot({
  path: path.join(root, "public", "projects", "protech.png"),
});

await browser.close();
console.log("Protech mockups written");
