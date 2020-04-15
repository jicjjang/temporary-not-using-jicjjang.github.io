import * as React from 'react';
import { useEffect } from 'react';
import {
  // Link,
  graphql,
  PageProps
} from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import { rhythm } from '~/configs/typography';
import { IQuerySiteData } from '~/interface';
import PostHeader from '~/components/PostHeader';
import PostTags from '~/components/PostTags';
import { addComments, removeComments } from '~/utils/comments';

interface IQuerydMarkdownData {
  markdownRemark: {
    id: string;
    excerpt: string;
    html: string;
    frontmatter: {
      title: string;
      date: string;
      tags: string[];
    };
  };
}

const PostTemplate: React.SFC<PageProps> = ({ location, data }) => {
  /**
   * @description 댓글 라이브러리를 post에만 추가, unmount에서 제거!
   */
  removeComments();
  addComments();

  useEffect(() => {
    return () => removeComments();
  }, []);

  const { site, markdownRemark } = data as IQuerySiteData<{ title: string }> & IQuerydMarkdownData;
  const {
    frontmatter: { title, date, tags },
    excerpt,
    html
  } = markdownRemark;
  // const { previous, next } = pageContext;

  return (
    <Layout title={site.siteMetadata.title} pathname={location.pathname}>
      <SEO title={title} description={excerpt} />
      <article>
        {/*<header>
           <h1
            style={{
              marginTop: rhythm(2),
              marginBottom: 0,
              fontSize: scale(1).fontSize
            }}>
            {title}
          </h1>
        </header> */}
        <PostHeader title={title!} date={date} />
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <footer style={{ color: '#898989' }}>{tags?.length && <PostTags tags={tags} />}</footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0
          }}>
          {/* @TODO 이전, 이후 포스팅 추가하기 */}
          {/* <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li> */}
        </ul>
      </nav>
      {/* @TODO 댓글 라이브러리 추가하기 */}
    </Layout>
  );
};

export default PostTemplate;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
  }
`;
