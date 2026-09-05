import { chromium } from "@playwright/test";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const html = path.join(root, "scripts", "compta-pilot-dashboard.html");
const out = path.join(root, "public", "projects", "compta-pilot.png");

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 810 } });
await page.goto(`file:///${html.replaceAll("\\", "/")}`);
await page.locator(".app").screenshot({ path: out });
await browser.close();
console.log("Compta Pilot dashboard written");
