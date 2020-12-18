import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { IQuerySiteData } from '~/interface';
import favicon from '@/contents/assets/favicon.png';

interface IQuerySeoData {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  image: string;
}

interface IProps {
  title?: string;
  url?: string;
  description?: string;
  meta?: JSX.IntrinsicElements['meta'][];
  link?: JSX.IntrinsicElements['link'][];
  script?: JSX.IntrinsicElements['script'][];
  lang?: string;
  image?: string;
}

const SEO: React.FunctionComponent<IProps> = ({ description, lang = 'ko', url, meta = [], link = [], script = [], title, image }) => {
  const {
    site: { siteMetadata }
  } = useStaticQuery<IQuerySiteData<IQuerySeoData>>(query);

  const metaDescription = description || siteMetadata.description;
  const metaImage = image || siteMetadata.image;

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title || siteMetadata.title}
      titleTemplate={title ? `%s | ${siteMetadata.title}` : siteMetadata.title}
      meta={meta.concat([
        {
          name: `og:title`,
          property: `og:title`,
          content: title || siteMetadata.title
        },
        {
          name: `og:site_name`,
          property: `og:site_name`,
          content: title || siteMetadata.title
        },
        {
          name: `og:url`,
          property: `og:url`,
          content: url || siteMetadata.siteUrl
        },
        {
          name: `og:description`,
          property: `og:description`,
          content: metaDescription
        },
        {
          name: `description`,
          property: `description`,
          content: metaDescription
        },
        {
          name: `og:type`,
          property: `og:type`,
          content: `website`
        },
        {
          name: `og:image`,
          property: `og:image`,
          content: metaImage
        },
        {
          name: `twitter:description`,
          property: `twitter:description`,
          content: metaDescription
        },
        {
          name: `twitter:title`,
          property: `twitter:title`,
          content: title || siteMetadata.title
        },
        {
          name: `twitter:url`,
          property: `twitter:url`,
          content: url || siteMetadata.siteUrl
        },
        {
          name: `twitter:site`,
          property: `twitter:site`,
          content: url || siteMetadata.siteUrl
        },
        {
          name: `twitter:domain`,
          property: `twitter:domain`,
          content: url || siteMetadata.siteUrl
        },
        {
          name: `twitter:image`,
          property: `twitter:image`,
          content: metaImage
        }
      ])}
      link={link.concat([{ rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }])}
      script={script}
    />
  );
};

export default SEO;

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;
