import puppeteer from "puppeteer";
import { writeFileSync } from "node:fs";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:5173/", { waitUntil: "networkidle0" });

  const pdf = await page.pdf({
    format: "A4",
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
    printBackground: true,
    scale: 0.8,
  });

  writeFileSync("output.pdf", pdf);

  await browser.close();
})();
