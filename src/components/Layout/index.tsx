import * as React from 'react';
import styled from 'styled-components';

import { rhythm } from '~/configs/typography';
import Header from './Header';
import Footer from './Footer';

const StyledDiv = styled.div<{ rhythm: (value: number) => string }>`
  margin: 0 auto;
  max-width: ${props => props.rhythm(24)};
  min-width: 320px;
  padding: ${props => props.rhythm(1.4)} ${props => props.rhythm(3 / 4)};
`;

interface IProps {
  title: string;
  pathname: string;
}

const Layout: React.SFC<React.PropsWithChildren<IProps>> = ({ title, pathname, children }) => (
  <StyledDiv rhythm={rhythm}>
    <Header title={title} pathname={pathname} />
    <main>{children}</main>
    <Footer />
  </StyledDiv>
);

export default Layout;
