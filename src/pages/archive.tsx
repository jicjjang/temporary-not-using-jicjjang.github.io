import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { PageProps, graphql } from 'gatsby';

import { scale, rhythm } from '~/configs/typography';
import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import { Query, MarkdownRemarkFields, MarkdownRemarkFrontmatter } from '~/gatsby-graphql-types';
import { StyledH1Title } from '~/components/common';
import PostTags from '~/components/PostTags';

const TITLE = 'Archive';

const BASE_YEAR = new Date().getFullYear();
const MIN_YEAR = 2015;
const YEAR_KEYS = Array.from({ length: BASE_YEAR - MIN_YEAR + 1 }, (_, index) => BASE_YEAR - index);

const StyledLink = styled(Link)`
  margin-right: 10px;
  box-shadow: none;
  text-decoration: none;
  color: #000;
`;

type IPostType = MarkdownRemarkFields & MarkdownRemarkFrontmatter;

export default ({ data, location: pLocation }: PageProps) => {
  const posts = {};
  (data as Query).allMarkdownRemark.edges.forEach(currentValue => {
    if (!posts[currentValue.node.frontmatter?.date]) {
      posts[currentValue.node.frontmatter?.date] = [];
    }

    posts[currentValue.node.frontmatter?.date].push({
      ...currentValue.node.frontmatter,
      slug: currentValue.node.fields?.slug
    });
  });

  return (
    <>
      <SEO title={TITLE} />
      <Layout title={TITLE} pathname={pLocation.pathname}>
        {YEAR_KEYS.map(
          yearKey =>
            posts[yearKey] && (
              <div
                key={yearKey}
                style={{
                  marginBottom: '20px'
                }}>
                <StyledH1Title scale={scale(0.5)} rhythm={rhythm(0.2)}>
                  {yearKey}
                </StyledH1Title>
                {posts[yearKey].map((post: IPostType, index: number) => (
                  <div key={post.title || index}>
                    <>
                      <StyledLink to={post.slug!}>{post.title}</StyledLink>
                      {post.tags?.length && <PostTags tags={post.tags} isInlineBlock={true} />}
                    </>
                  </div>
                ))}
              </div>
            )
        )}
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
