// Only for Linkedin - to check if the url is a job
export const linkedinJobUrlKeyword = "?currentJobId";

// Only for linkedin - class target to get job description
export const linkedinJobDescriptionTarget = "jobs-details__main-content";

// Only for Linkedin - getting job header details
export const linkedinJobHeaderDetails = [
  { target: ".job-details-jobs-unified-top-card__job-title", eq: 0 },
  { target: ".job-details-jobs-unified-top-card__primary-description", eq: 0 },
  { target: ".job-details-jobs-unified-top-card__job-insight", eq: 1 },
];
