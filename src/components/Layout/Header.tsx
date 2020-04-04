import * as React from 'react';
import { Link } from 'gatsby';

import { PAGE_URL } from '~/configs/urls';
import { scale, rhythm } from '~/configs/typography';

interface IProps {
  pathname: string;
  title: string;
}

const Header: React.SFC<IProps> = ({ pathname, title }) => (
  <header>
    {pathname === PAGE_URL.HOME ? (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0
        }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={PAGE_URL.HOME}>
          {title}
        </Link>
      </h1>
    ) : (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0
        }}>
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`
          }}
          to={`/`}>
          {title}
        </Link>
      </h3>
    )}
  </header>
);

export default Header;
