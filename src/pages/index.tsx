import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import styled from 'styled-components';
import { BaseLine } from 'typography';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import { Query, MarkdownRemarkFields, MarkdownRemarkFrontmatter } from '~/gatsby-graphql-types';
import { rhythm } from '~/configs/typography';
import { scale } from '~/configs/typography';
import PostHeader from '~/components/PostHeader';
import PostTags from '~/components/PostTags';

const StyledArticle = styled.article<{ rhythm: string }>`
  margin-bottom: ${props => props.rhythm};
`;

const StyledDiv = styled.div<{ rhythm: string }>`
  margin-bottom: ${props => props.rhythm};
`;

const StyledPExcerpt = styled.p<{ scale: BaseLine }>`
  font-weight: 400;
  font-size: ${props => props.scale.fontSize};
  line-height: ${props => props.scale.lineHeight};
  color: #353535;
`;

type IPostType = MarkdownRemarkFields & MarkdownRemarkFrontmatter & { excerpt: string };

export default ({ path, data }: PageProps) => {
  const siteTitle = (data as Query).site!.siteMetadata!.title;
  const posts = (data as Query).allMarkdownRemark.edges.reduce((mergedValue: IPostType[], currentValue) => {
    mergedValue.push({
      ...currentValue.node.frontmatter,
      slug: currentValue.node.fields?.slug || '',
      excerpt: currentValue.node.excerpt || ''
    });
    return mergedValue;
  }, []);

  return (
    <>
      <SEO />
      <Layout title={siteTitle!} pathname={path}>
        {posts.map(({ title, tags, slug, date, excerpt }: IPostType, index: number) => (
          <StyledArticle key={`${title}-${index}`} rhythm={rhythm(2)}>
            <PostHeader title={title!} slug={slug || undefined} date={date} />
            {excerpt && (
              <StyledDiv rhythm={rhythm(0.5)}>
                <StyledPExcerpt scale={scale(0)}>{excerpt}</StyledPExcerpt>
              </StyledDiv>
            )}
            {tags && <PostTags tags={tags} />}
          </StyledArticle>
        ))}
      </Layout>
    </>
  );
};

export const query = graphql`
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
            tags
          }
        }
      }
    }
  }
`;
