import * as cheerio from "cheerio";

// Keywords used to detect if a url is a job.
const jobUrlKeywords = ["?currentJobId"];

// Only for linkedin - class target to get job description
const linkedinJobDescriptionTarget = "jobs-details__main-content";

// Only for Linkedin - getting job header details
export const linkedinJobHeaderDetails = [
  { target: ".job-details-jobs-unified-top-card__job-title", eq: 0 },
  { target: ".job-details-jobs-unified-top-card__job-insight", eq: 0 },
  { target: ".job-details-jobs-unified-top-card__job-insight", eq: 1 },
];

export function checkIfUrlIsJob(url: string): boolean {
  return jobUrlKeywords.some((keyword) => url.includes(keyword));
}

export const getLinkedinJobContents = async (tabId: number) => {
  let domRes = await chrome.scripting
    .executeScript({
      target: { tabId },
      func: () => {
        return Array.from(
          document.getElementsByClassName(linkedinJobDescriptionTarget),
          (el) => el.innerHTML
        );
      },
    })
    .catch(console.error);
  if (!domRes) return;

  return domRes;
};

export const getDomElementsFromActiveTab = async (
  tabId: number,
  targetClasses: { target: string; eq: number }[]
) => {
  let domRes = await chrome.scripting
    .executeScript({
      target: { tabId },
      func: () => {
        const elements = document.getElementsByTagName("div");
        const htmlContents = Array.from(elements, (el) => el.innerHTML);
        return htmlContents.join("");
      },
    })
    .catch(console.error);

  if (!domRes) return;

  const $ = cheerio.load(domRes[0].result as any);

  function filterBreakingLines(inputString: string) {
    // Split the input string by newline characters and trim each element
    const values = inputString
      .split("\n")
      .map((value) => value.trim())
      .filter((value) => value.length > 0); // Filter out empty strings

    return values;
  }

  const result = targetClasses.map((targetClass) => {
    const elementText = $(targetClass.target).eq(targetClass.eq).text().trim();
    return {
      class: targetClass,
      data: elementText.includes("\n")
        ? filterBreakingLines(elementText)
        : elementText,
    };
  });

  return result;
};
