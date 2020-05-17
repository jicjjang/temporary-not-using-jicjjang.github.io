import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import styled from 'styled-components';
import { BaseLine } from 'typography';

import { PAGE_URL } from '~/configs/urls';
import { scale, rhythm } from '~/configs/typography';

const NOT_CHOICE_COLOR = '#898989';
const CHOICE_COLOR = '#000';

const StyledHeader = styled.header<{ rhythm: (value: number) => string }>`
  margin-top: 0;
  margin-bottom: ${({ rhythm }) => rhythm(1.2)};
`;

const StyledH3 = styled.h3<{ scale: BaseLine }>`
  display: inline-block;
  margin: 0;
  font-size: ${({ scale }) => scale.fontSize};
  line-height: ${({ scale }) => scale.lineHeight};
`;

const StyledLink = styled(GatsbyLink)`
  box-shadow: none;
  text-decoration: none;
  color: #000;
`;

const StyledUl = styled.ul`
  float: right;
  display: inline-block;
  margin: 18px 0;
  &:after {
    content: '';
    display: table;
    clear: both;
  }

  @media (max-width: 650px) {
    display: block;
    float: none;
    text-align: center;
    border-bottom: 2px solid #cfcdcd;
  }
`;

const StyledLi = styled.li`
  display: inline-block;
  padding: 0 15px;
  list-style-type: none;
  vertical-align: middle;
  font-size: 16px;

  @media (max-width: 450px) {
    padding: 0 8px;
    font-size: 14px;
  }
`;

/**
 * @description 이 안에서 색을 고르는 삼항연산자는 warning이 발생함...
 */
const StyleLiLink = styled(GatsbyLink)`
  color: ${NOT_CHOICE_COLOR};
`;

enum MENU {
  POSTS = 'Posts',
  PRESENTATION = 'Presentation',
  ARCHIVE = 'Archive'
  // RESUME = 'Resume'
}

const MENU_MAPPED_PATH = {
  [MENU.POSTS]: PAGE_URL.HOME,
  [MENU.PRESENTATION]: PAGE_URL.PRESENTATION,
  [MENU.ARCHIVE]: PAGE_URL.ARCHIVE
  // [MENU.RESUME]: PAGE_URL.RESUME
};

interface IProps {
  title: string;
  pathname: string;
}

const Header: React.SFC<IProps> = ({ title, pathname }) => (
  <StyledHeader rhythm={rhythm}>
    <StyledH3 scale={scale(1.2)}>
      <StyledLink to={pathname}>{title}</StyledLink>
    </StyledH3>
    <StyledUl>
      {Object.keys(MENU).map(key => (
        <StyledLi key={key}>
          <StyleLiLink
            activeStyle={{
              color: CHOICE_COLOR
            }}
            to={MENU_MAPPED_PATH[MENU[key]]}>
            {MENU[key]}
          </StyleLiLink>
        </StyledLi>
      ))}
    </StyledUl>
  </StyledHeader>
);

export default Header;
