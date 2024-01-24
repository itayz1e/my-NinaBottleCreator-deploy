import { Page, Browser } from "./types";

export async function initializePage(browser: Browser): Promise<Page> {
  const page: Page = await browser.newPage();
  return page;
}

export async function gotoUrl(page: Page, url: string): Promise<void> {
  await page.goto(url, { waitUntil: 'networkidle0' });
}