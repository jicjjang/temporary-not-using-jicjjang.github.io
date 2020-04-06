import * as React from 'react';
import {
  // Link,
  graphql
} from 'gatsby';

import Bio from '~/components/bio';
import Layout from '~/components/Layout';
import SEO from '~/components/SEO';
import { rhythm, scale } from '~/configs/typography';
import { ITemplateProps } from '~/templates/interface';

interface IProps
  extends ITemplateProps<{
    slug: string;
    post: string;
    title: string;
  }> {}

/**
 * @TODO 타입 찾기
 */
const PostTemplate: React.SFC<IProps> = ({ location }) => {
  // @ts-ignore
  const { title, markdownRemark } = data?.site.siteMetadata;
  const {
    frontmatter: { date },
    excerpt,
    html
  } = markdownRemark;
  // const { previous, next } = pageContext;

  return (
    <Layout title={title} pathname={location.pathname}>
      <SEO title={title} description={excerpt} />
      <article>
        <header>
          <h1
            style={{
              marginTop: rhythm(1),
              marginBottom: 0
            }}>
            {title}
          </h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1)
            }}>
            {date}
          </p>
        </header>
        <section dangerouslySetInnerHTML={{ __html: html }} />
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <footer>
          <Bio />
        </footer>
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
