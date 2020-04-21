export const PAGE_URL = {
  HOME: '/',
  ARCHIVE: '/archive',
  PRESENTATION: '/presentation',
  RESUME: '/resume'
};

export const compareTrailingUrl = (prevUrl: string, nextUrl: string) =>
  (/\w+\/$/.test(prevUrl) ? prevUrl.slice(0, prevUrl.length - 1) : prevUrl) ===
  (/\w+\/$/.test(nextUrl) ? nextUrl.slice(0, nextUrl.length - 1) : nextUrl);
