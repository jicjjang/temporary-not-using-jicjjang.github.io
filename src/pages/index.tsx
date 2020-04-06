import * as React from 'react';
import { PageProps, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { BaseLine } from 'typography';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import { Query, MarkdownRemarkFields, MarkdownRemarkFrontmatter } from '~/gatsby-graphql-types';
import { rhythm } from '~/configs/typography';
import { scale } from '~/configs/typography';

const StyledArticle = styled.article<{ rhythm: string }>`
  margin-bottom: ${props => props.rhythm};
`;

const StyledHeader = styled.header<{ rhythm: string }>`
  margin-bottom: ${props => props.rhythm};
`;

const StyledH1 = styled.h1<{ scale: BaseLine; rhythm: string }>`
  color: #000;
  margin-bottom: ${props => props.rhythm};
  border-bottom: none;
  font-size: ${props => props.scale.fontSize};
  font-weight: 500;
  line-height: ${props => props.scale.lineHeight};
`;

const StyledH1Link = styled(Link)`
  color: #000;
  &:hover {
    color: #172fde;
  }
`;

const StyledTime = styled.time<{ scale: BaseLine }>`
  color: #898989;
  font-size: ${props => props.scale.fontSize};
  line-height: ${props => props.scale.lineHeight};
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

const StyledPTags = styled.p<{ scale: BaseLine }>`
  color: #898989;
  font-size: ${props => props.scale.fontSize};
  line-height: ${props => props.scale.lineHeight};
`;

export default ({ path, data }: PageProps) => {
  const siteTitle = (data as Query).site!.siteMetadata!.title;
  const posts = (data as Query).allMarkdownRemark.edges.reduce(
    (mergedValue: (MarkdownRemarkFields & MarkdownRemarkFrontmatter & { excerpt: string })[], currentValue) => {
      mergedValue.push({
        ...currentValue.node.frontmatter,
        slug: currentValue.node.fields?.slug || '',
        excerpt: currentValue.node.excerpt || ''
      });
      return mergedValue;
    },
    []
  );

  return (
    <>
      <SEO />
      <Layout title={siteTitle!} pathname={path}>
        {posts.map(({ title, tags, slug, date, excerpt }) => (
          <StyledArticle rhythm={rhythm(2)} itemScope={true} itemType="http://schema.org/BlogPosting">
            <StyledHeader rhythm={rhythm(1.2)}>
              <StyledH1 scale={scale(0.5)} rhythm={rhythm(0.2)} itemProp="name headline">
                <StyledH1Link to={slug!}>{title}</StyledH1Link>
              </StyledH1>
              <p className="post-meta">
                <StyledTime dateTime={date} scale={scale(-0.1)} itemProp="datePublished">
                  {date}
                </StyledTime>
              </p>
            </StyledHeader>
            {excerpt && (
              <StyledDiv rhythm={rhythm(0.5)} itemProp="articleBody">
                <StyledPExcerpt scale={scale(0)}>{excerpt}</StyledPExcerpt>
              </StyledDiv>
            )}
            {tags && <StyledPTags scale={scale(-0.1)}>{tags.map(tag => `#${tag} `)}</StyledPTags>}
          </StyledArticle>
        ))}
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
            tags
          }
        }
      }
    }
  }
`;
