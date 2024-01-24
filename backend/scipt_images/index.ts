import { initializeBrowser, closeBrowser } from "./browser";
import { initializePage } from "./page";
import { scrapeImages } from "./scrapeImages";

export async function scrapingBottleImages(imageSearch: string) {
  const browser = await initializeBrowser();
  const page = await initializePage(browser);

  const pages = await scrapeImages(page, imageSearch);

  const filteredImages = pages.filter((item) => item.imgSrc !== null);

  await closeBrowser(browser);

  return filteredImages;
}
