export const siteName = "Dr. Priya Surana";
export const siteUrl = "https://www.priyasurana.in";
export const defaultDescription =
  "Dr. Priya Surana is an Assistant Professor in Computer Engineering, focused on AI, machine learning, research mentoring, and innovation-led academic work.";
export const defaultImage = "/og-image.svg";

export function buildAbsoluteUrl(pathname = "/") {
  return new URL(pathname, siteUrl).toString();
}

export function buildSameAsLinks(profile = {}) {
  return [
    profile.linkedin,
    profile.github,
    profile.scholar,
    profile.scopus,
    profile.orcid,
  ].filter(Boolean);
}
