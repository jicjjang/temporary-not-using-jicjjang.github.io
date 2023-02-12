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
  PRESENTATION_7: '/presentation/7',
  PRESENTATION_8: '/presentation/8',
  PRESENTATION_9: '/presentation/9'
};

export interface IPresentationData {
  title: string;
  path: string;
  tags: string[];
  date: string;
}
export const PRESENTATION_DATA: IPresentationData[] = [
  {
    path: PAGE_URL.PRESENTATION_1,
    title: 'React.js basic - NHN벅스 팀 세미나 발표 자료',
    date: 'Nov, 23, 2016',
    tags: ['react', 'nhn', 'bugs']
  },
  {
    path: PAGE_URL.PRESENTATION_2,
    title: 'Vue.js basic - NHN벅스 팀 세미나 발표 자료',
    date: 'Apr, 08, 2017',
    tags: ['vue', 'nhn', 'bugs']
  },
  {
    path: PAGE_URL.PRESENTATION_3,
    title: '현실적인 개발로 먹고살기',
    date: 'July, 15, 2017',
    tags: ['developer', 'kookmin', 'university']
  },
  {
    path: PAGE_URL.PRESENTATION_4,
    title: 'How to use RxJs - NHN벅스 팀 세미나 발표 자료',
    date: 'Nov, 30, 2017',
    tags: ['rxjs', 'nhn', 'bugs']
  },
  {
    path: PAGE_URL.PRESENTATION_5,
    title: 'Vue pwa 시작하기 - Vuetiful korea 3rd 발표자료',
    date: 'Nov, 30, 2017',
    tags: ['vue', 'pwa', 'vuetifulkorea', '3rd']
  },
  {
    path: PAGE_URL.PRESENTATION_6,
    title: 'Graphql 시작하기 (server) - NHN벅스 팀 세미나 발표 자료',
    date: 'Mar, 05, 2018',
    tags: ['graphql', 'server', 'nhn', 'bugs']
  },
  {
    path: PAGE_URL.PRESENTATION_7,
    title: 'Graphql 시작하기 (client) - NHN벅스 팀 세미나 발표 자료',
    date: 'Mar, 06, 2018',
    tags: ['graphql', 'client', 'nhn', 'bugs']
  },
  {
    path: PAGE_URL.PRESENTATION_8,
    title: 'Apollo로 알아보는 Vue in the GraphQL - Vuetiful korea 4th 발표자료',
    date: 'Apr, 16, 2018',
    tags: ['vue', 'graphql', 'apollo', 'vuetifulkorea', '4th']
  },
  {
    path: PAGE_URL.PRESENTATION_9,
    title: 'Vuetiful korea 5회 세미나 내용 정리',
    date: 'Aug, 15, 2018',
    tags: ['vue', 'vuetifulkorea', '5th']
  }
];

export const compareTrailingSlash = (prevUrl: string, nextUrl: string) =>
  (prevUrl.endsWith('/') ? prevUrl.slice(0, -1) : prevUrl) === (nextUrl.endsWith('/') ? nextUrl.slice(0, -1) : nextUrl);

export const removeTrailingSlash = (path: string) => (path.endsWith('/') ? path.slice(0, -1) : path);
