// Keywords used to detect if a url is a job.
const jobUrlKeywords = ["/jobs", "?currentJobId"];

// Only for linkedin - class target to get job description
const linkedinJobDescriptionTarget = "jobs-description__container";

export function checkIfUrlIsJob(url: string): boolean {
  return jobUrlKeywords.some((keyword) => url.includes(keyword));
}

export const getContentsOfUrl = async (tabId: number) => {
  function getDOM() {
    return Array.from(
      document.getElementsByClassName(linkedinJobDescriptionTarget),
      (el) => el.innerHTML
    );
  }
  let domRes = await chrome.scripting
    .executeScript({
      target: { tabId },
      func: getDOM,
    })
    .catch(console.error);
  if (!domRes) return;

  return domRes;
};
