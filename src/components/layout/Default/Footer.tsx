import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { IQuerySiteData } from '~/interface';
import { rhythm } from '~/configs/typography';

interface IQuerySnsData {
  social: {
    mail: string;
    github: string;
    linkedin: string;
    instagram: string;
  };
}

interface IQueryAllFilesData {
  allFile: {
    edges: {
      node: {
        publicURL: string;
        name: string;
      };
    }[];
  };
}

const Footer: React.SFC<any> = () => {
  const {
    site: {
      siteMetadata: { social }
    },
    allFile: { edges }
  } = useStaticQuery<IQuerySiteData<IQuerySnsData> & IQueryAllFilesData>(query);

  return (
    <footer style={{ textAlign: 'center' }}>
      {edges.map(edge => (
        <span
          key={edge.node.name}
          style={{ display: 'inline-block', width: rhythm(1.4), verticalAlign: 'top', margin: '0 10px' }}>
          <a
            href={social[edge.node.name] === social.mail ? `mailto:${social.mail}` : social[edge.node.name]}
            target="_blank">
            <img src={edge.node.publicURL} style={{ display: 'block', width: '100%' }} />
          </a>
        </span>
      ))}
    </footer>
  );
};

export default Footer;

const query = graphql`
  query {
    site {
      siteMetadata {
        social {
          mail
          github
          linkedin
          instagram
        }
      }
    }
    allFile(filter: { extension: { in: ["png"] }, relativeDirectory: { in: ["social"] } }) {
      edges {
        node {
          name
          publicURL
        }
      }
    }
  }
`;
