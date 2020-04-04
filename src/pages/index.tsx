import * as React from 'react';
import { PageProps, graphql } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import { Query } from '~/gatsby-graphql-types';

export default ({ location, data }: PageProps) => {
  const siteTitle = (data as Query).site!.siteMetadata!.title;
  const posts = (data as Query).allMarkdownRemark.edges;
  console.log(posts);

  return (
    <>
      <SEO title={'HOME'} />
      <Layout pathname={location.pathname} title={siteTitle!}>
        <div>test</div>
      </Layout>
    </>
  );
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
