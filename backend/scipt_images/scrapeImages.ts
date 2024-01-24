import { error } from "console";
import { Page } from "./types";

export async function scrapeImages(page: Page, imageSearch: string): Promise<any[]> {

  if (!imageSearch) {
    throw new Error("Image search query not provided.");
  }

  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    imageSearch + " bottle transparent background"
  )}+filetype:png&tbm=isch`;

  await page.goto(googleSearchUrl, { waitUntil: "networkidle0" });

  try {
    await page.waitForSelector("img", { timeout: 5000 });

    const imageSelector = `${process.env.VITE_IMAGE_CLASS}`;
    const imageUrls: any[] = await page.evaluate((selector) => {
      const images = Array.from(document.querySelectorAll(selector)) as Element[];
      return images.map((image, index) => {
        if (index == 0) {
          console.log(image);
        }
        return {
          imgSrc: image.getAttribute("data-src"),
        };
      });
    }, imageSelector);

    return imageUrls;
  } catch (error) {
    console.error("An error occurred:", error);
    return [];
  }
}

// הפונקציה למטה היא מחזירה מערך של URLS

// export async function scrapeImages(page: Page, imageSearch: string): Promise<string[]> {
//   if (!imageSearch) {
//     console.error("Image search query not provided. Exiting.");
//     return [];
//   }

//   const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(imageSearch + " bottle transparent background")}+filetype:png&tbm=isch`;

//   await page.goto(googleSearchUrl, { waitUntil: 'networkidle0' });

//   try {
//     await page.waitForSelector("img", { timeout: 5000 });

//     const imageUrls: string[] = await page.evaluate(() => {
//       const images = Array.from(document.querySelectorAll("img.rg_i")) as HTMLImageElement[];
//       return images.slice(0, 3).map((image) => image.getAttribute('data-src') || image.getAttribute('src') || '');
//     });

//     return imageUrls.filter(url => url !== ''); // Remove empty URLs.

//   } catch (error) {
//     console.error("An error occurred:", error);
//     return [];
//   }
// }
