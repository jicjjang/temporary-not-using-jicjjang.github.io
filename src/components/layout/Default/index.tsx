import * as React from 'react';
import styled from 'styled-components';

import { rhythm } from '~/configs/typography';
import Header from './Header';
import Footer from './Footer';
import SEO from '~/components/SEO';

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
  pathname?: string;
  description?: string;
}

const DefaultLayout: React.FunctionComponent<React.PropsWithChildren<IProps>> = ({
  title,
  pathname = '/',
  description,
  children
}) => (
  <>
    <SEO title={title} description={description} />
    <StyledDiv rhythm={rhythm}>
      <Header title={title} pathname={pathname} />
      <StyledMain rhythm={rhythm}>{children}</StyledMain>
      <Footer />
    </StyledDiv>
  </>
);

export default DefaultLayout;
