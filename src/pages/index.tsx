import * as React from 'react';
import { PageProps, graphql } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import { Query, MarkdownRemarkFields, MarkdownRemarkFrontmatter } from '~/gatsby-graphql-types';

export default ({ path, data }: PageProps) => {
  const siteTitle = (data as Query).site!.siteMetadata!.title;
  const posts = (data as Query).allMarkdownRemark.edges.reduce(
    (mergedValue: (MarkdownRemarkFields & MarkdownRemarkFrontmatter)[], currentValue) => {
      mergedValue.push({ ...currentValue.node.fields, ...currentValue.node.frontmatter });
      return mergedValue;
    },
    []
  );

  return (
    <>
      <SEO />
      <Layout title={siteTitle!} pathname={path}>
        <div>
          {posts.map(({ title, slug, date, description }) => (
            <>
              <div>
                <div>
                  {title} - {slug}
                </div>
                <div>{date}</div>
                <div>{description}</div>
              </div>
              <br />
              <br />
            </>
          ))}
        </div>
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
