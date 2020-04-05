import * as React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { BaseLine } from 'typography';

import { PAGE_URL } from '~/configs/urls';
import { scale, rhythm } from '~/configs/typography';

const StyledHeader = styled.header<{ rhythm: (value: number) => string }>`
  margin-top: 0;
  margin-bottom: ${({ rhythm }) => rhythm(1.2)};
`;

const StyledH3 = styled.h3<{ scale: BaseLine }>`
  display: inline-block;
  font-size: ${({ scale }) => scale.fontSize};
  line-height: ${({ scale }) => scale.lineHeight};
`;

const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: #000;
`;

const StyledUl = styled.ul`
  float: right;
  display: inline-block;
  margin-top: 18px;
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;

const StyledLi = styled.li`
  display: inline-block;
  padding: 0 20px;
  list-style-type: none;
  vertical-align: middle;
  font-size: 16px;
`;

/**
 * @description 이 안에서 색을 고르는 삼항연산자는 warning이 발생함...
 */
const StyleLiLink = styled(Link)<{ color: string }>`
  color: ${props => props.color};
`;

interface IProps {
  title: string;
  pathname: string;
}

const Header: React.SFC<IProps> = ({ title, pathname }) => (
  <StyledHeader rhythm={rhythm}>
    <StyledH3 scale={scale(1.2)}>
      <StyledLink to={PAGE_URL.HOME}>{title}</StyledLink>
    </StyledH3>
    <StyledUl>
      <StyledLi>
        <StyleLiLink color={pathname === PAGE_URL.HOME ? '#000' : '#898989'} to={PAGE_URL.HOME}>
          Posts
        </StyleLiLink>
      </StyledLi>
      <StyledLi>
        <StyleLiLink color={pathname === PAGE_URL.PRESENTATION ? '#000' : '#898989'} to={PAGE_URL.PRESENTATION}>
          Presentation
        </StyleLiLink>
      </StyledLi>
      <StyledLi>
        <StyleLiLink color={pathname === PAGE_URL.RESUME ? '#000' : '#898989'} to={PAGE_URL.RESUME}>
          Resume
        </StyleLiLink>
      </StyledLi>
    </StyledUl>
  </StyledHeader>
);

export default Header;
