module.exports = {
  /**
   * @TODO SEO.tsx에 연결되어있으니, 데이터를 채워넣어줘야 함
   */
  siteMetadata: {
    title: 'June',
    author: 'Junseok, Choi',
    image: '',
    summary: '',
    description: '',
    siteUrl: process.env.NODE_ENV === 'production' ? 'https://jicjjang.github.io' : 'http://127.0.0.1:8000',
    social: {
      mail: 'mailto:jicjjang12@gmail.com',
      github: 'https://github.com/jicjjang',
      linkedin: 'https://www.linkedin.com/in/jicjjang',
      instagram: 'https://www.instagram.com/jicjjang'
    }
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    // unofficail
    {
      resolve: `gatsby-plugin-tsconfig-paths`,
      options: {
        configFile: `${__dirname}/tsconfig.json`,
        silent: true
      }
    },
    {
      // unofficail
      resolve: 'gatsby-plugin-tslint',
      options: {
        test: /\.tsx?$/,
        exclude: /(node_modules|cache|public)/
      }
    },
    {
      /**
       * @TODO 타이포도 어떻게 쓰는지 좀 확인 필요...
       */
      // 타이포 지원
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/configs/typography`
      }
    },
    {
      // graphQL 안에서 files, allFiles를 사용할 수 있게 도와줌
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/assets`,
        name: `contents/assets`
      }
    },
    {
      // graphQL 안에서 files, allFiles를 사용할 수 있게 도와줌
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/contents/posts`,
        name: `contents/posts`
      }
    },
    {
      // md파일 지원
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            // md 헤더에 자동 링크 걸어줌
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `autolink-headers--`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true
            }
          },

          /**
           * @descriptoin markdown의 링크를 외부로 보내줌
           */
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noopener'
            }
          },
          {
            // 정의된 언어에따라 강조된 html 형태로 재생성
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false
            }
          },
          `gatsby-remark-copy-linked-files`, // build 시, md파일 내 링크된 파일들을 public으로 같이 옮겨줌
          // gatsby-remark-images는 jpeg, png만 처리함.
          /**
           * @TODO maxWidth 처리 되는거 맞나...? 아닌거 같은데... 확인 고고
           */
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 480
            }
          }
        ]
      }
    },
    /**
     * @TODO sharp 사용법 좀 알아봐야 함
     * https://image-processing.gatsbyjs.org/
     */
    `gatsby-plugin-sharp`, // https://github.com/lovell/sharp - sharp 라이브러리로 이미지를 감싸줌,
    `gatsby-transformer-sharp`, // sharp 라이브러리로 감싸진 이미지를 graphQL에서 사용할 수 있게 도와줌
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-59806888-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: false
      }
    },
    {
      resolve: `gatsby-plugin-graphql-codegen`,
      options: {
        fileName: `./src/gatsby-graphql-types.ts`,
        documentPaths: ['./src/**/*.{ts,tsx}', './node_modules/gatsby-*/**/*.js'],
        codegenDelay: 30000
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        /**
         * @TODO feed는 다 만들고 설정.
         */
      }
    },
    /**
     * @TODO
     * 헬멧 세팅 필요
     */
    `gatsby-plugin-react-helmet`
  ]
};

/**
 * @TODO SSR!!!
 */
