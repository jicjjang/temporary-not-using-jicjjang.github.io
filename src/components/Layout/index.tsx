import * as React from 'react';

import { rhythm } from '~/configs/typography';
import Header from './Header';
import Footer from './Footer';

interface IProps {
  pathname: string;
  title: string;
}

const Layout: React.SFC<React.PropsWithChildren<IProps>> = ({ pathname, title, children }) => (
  <div
    style={{
      marginLeft: `auto`,
      marginRight: `auto`,
      maxWidth: rhythm(24),
      padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
    }}>
    <Header pathname={pathname} title={title} />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
