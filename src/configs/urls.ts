export const PAGE_URL = {
  HOME: '/',
  ARCHIVE: '/archive',
  RESUME: '/resume',
  PRESENTATION: '/presentation',
  PRESENTATION_1: '/presentation/1',
  PRESENTATION_2: '/presentation/2',
  PRESENTATION_3: '/presentation/3',
  PRESENTATION_4: '/presentation/4',
  PRESENTATION_5: '/presentation/5',
  PRESENTATION_6: '/presentation/6',
  PRESENTATION_7: '/presentation/7'
};

export interface IPresentationData {
  title: string;
  path?: string;
  tags: string[];
  date: string;
}
export const PRESENTATION_DATA: { [key: string]: IPresentationData } = {
  [PAGE_URL.PRESENTATION_1]: {
    title: '현실적인 개발로 먹고살기',
    date: 'July, 15, 2017',
    tags: ['hoho', 'hihi']
  },
  [PAGE_URL.PRESENTATION_2]: {
    title: '',
    date: '',
    tags: []
  },
  [PAGE_URL.PRESENTATION_3]: {
    title: '',
    date: '',
    tags: []
  },
  [PAGE_URL.PRESENTATION_4]: {
    title: '',
    date: '',
    tags: []
  },
  [PAGE_URL.PRESENTATION_5]: {
    title: '',
    date: '',
    tags: []
  },
  [PAGE_URL.PRESENTATION_6]: {
    title: '',
    date: '',
    tags: []
  },
  [PAGE_URL.PRESENTATION_7]: {
    title: '',
    date: '',
    tags: []
  }
};

export const compareTrailingSlash = (prevUrl: string, nextUrl: string) =>
  (prevUrl.endsWith('/') ? prevUrl.slice(0, -1) : prevUrl) === (nextUrl.endsWith('/') ? nextUrl.slice(0, -1) : nextUrl);

export const removeTrailingSlash = (path: string) => (path.endsWith('/') ? path.slice(0, -1) : path);
