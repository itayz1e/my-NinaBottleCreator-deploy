import puppeteer, { Browser } from "puppeteer";

export async function initializeBrowser(): Promise<Browser> {
  const browser: Browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null,
  });
  return browser;
}

export async function closeBrowser(browser: Browser): Promise<void> {
  await browser.close();
}