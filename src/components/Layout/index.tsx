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

const StyledMain = styled.main<{ rhythm: (value: number) => string }>`
  margin-bottom: ${props => props.rhythm(4)};
`;

interface IProps {
  title: string;
  pathname: string;
}

const Layout: React.SFC<React.PropsWithChildren<IProps>> = props => {
  const { title, pathname, children } = props;
  console.log(props);
  return (
    <StyledDiv rhythm={rhythm}>
      <Header title={title} pathname={pathname} />
      <StyledMain rhythm={rhythm}>{children}</StyledMain>
      <Footer />
    </StyledDiv>
  );
};

export default Layout;
