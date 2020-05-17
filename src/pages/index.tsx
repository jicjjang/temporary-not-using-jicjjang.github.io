import * as React from 'react';
import { PageProps, graphql } from 'gatsby';
import styled from 'styled-components';
import { BaseLine } from 'typography';

import DefaultLayout from '~/components/layout/Default';
import { Query, MarkdownRemarkFields, MarkdownRemarkFrontmatter } from '~/gatsby-graphql-types';
import { rhythm } from '~/configs/typography';
import { scale } from '~/configs/typography';
import PostHeader from '~/components/PostHeader';
import PostTags from '~/components/PostTags';
import { StyledCommonArticle, StyledCommonDivPost, StyledCommonDivEmpty } from '~/components/common';

const StyledPExcerpt = styled.p<{ scale: BaseLine }>`
  font-weight: 400;
  font-size: ${props => props.scale.fontSize};
  line-height: ${props => props.scale.lineHeight};
  color: #353535;
`;

const CURRENT_YEAR = new Date().getFullYear().toString();

type IPostType = MarkdownRemarkFields & MarkdownRemarkFrontmatter & { excerpt: string };

export default (props: PageProps) => {
  const { path, data } = props;

  const siteTitle = (data as Query).site!.siteMetadata!.title;
  const posts = (data as Query).allMarkdownRemark.edges
    .filter(currentValue => currentValue.node.frontmatter?.date.endsWith(CURRENT_YEAR))
    .reduce((mergedValue: IPostType[], currentValue) => {
      mergedValue.push({
        ...currentValue.node.frontmatter,
        slug: currentValue.node.fields?.slug || '',
        excerpt: currentValue.node.excerpt || ''
      });
      return mergedValue;
    }, []);

  return (
    <DefaultLayout title={siteTitle!} pathname={path}>
      {posts.length > 0 ? (
        posts.map(({ title, tags, slug, date, excerpt }: IPostType, index: number) => (
          <StyledCommonArticle key={`${title}-${index}`} rhythm={rhythm(2)}>
            <PostHeader title={title!} path={slug || undefined} date={date} />
            {excerpt && (
              <StyledCommonDivPost rhythm={rhythm(0.5)}>
                <StyledPExcerpt scale={scale(0)}>{excerpt}</StyledPExcerpt>
              </StyledCommonDivPost>
            )}
            {tags?.length ? <PostTags tags={tags} /> : null}
          </StyledCommonArticle>
        ))
      ) : (
        <StyledCommonDivEmpty rhythm={rhythm(4)}>컨텐츠가 없습니다.</StyledCommonDivEmpty>
      )}
    </DefaultLayout>
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
          excerpt(pruneLength: 180)
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
