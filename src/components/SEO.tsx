import * as React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import { IQuerySiteData } from '~/interface';

interface IQuerySeoData {
  title: string;
  description: string;
  author: string;
  siteUrl: string;
  image: string;
}

interface IProps {
  title?: string;
  description?: string;
  meta?: JSX.IntrinsicElements['meta'][];
  lang?: string;
  image?: string;
}

const SEO: React.SFC<IProps> = ({ description, lang = 'ko', meta = [], title, image }) => {
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
          content: title
        },
        {
          name: `og:site_name`,
          property: `og:site_name`,
          content: title
        },
        {
          name: `og:url`,
          property: `og:url`,
          content: siteMetadata.siteUrl
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
          content: title
        },
        {
          name: `twitter:url`,
          property: `twitter:url`,
          content: siteMetadata.siteUrl
        },
        {
          name: `twitter:site`,
          property: `twitter:site`,
          content: siteMetadata.siteUrl
        },
        {
          name: `twitter:domain`,
          property: `twitter:domain`,
          content: siteMetadata.siteUrl
        },
        {
          name: `twitter:image`,
          property: `twitter:image`,
          content: metaImage
        }
      ])}
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
