import * as React from 'react';
import styled from 'styled-components';
import { BaseLine } from 'typography';
import { Link } from 'gatsby';

import { scale, rhythm } from '~/configs/typography';

const StyledHeader = styled.header<{ rhythm: string }>`
  margin-bottom: ${props => props.rhythm};
`;

const StyledH1 = styled.h1<{ scale: BaseLine; rhythm: string }>`
  color: #000;
  margin-bottom: ${props => props.rhythm};
  border-bottom: none;
  font-size: ${props => props.scale.fontSize};
  font-weight: 500;
  line-height: ${props => props.scale.lineHeight};
`;

const StyledH1Link = styled(Link)`
  color: #000;
  &:hover {
    color: #172fde;
  }
`;

const StyledTime = styled.time<{ scale: BaseLine }>`
  color: #898989;
  font-size: ${props => props.scale.fontSize};
  line-height: ${props => props.scale.lineHeight};
`;

interface IProps {
  title: string;
  slug?: string;
  date: string;
}

const PostHeader: React.SFC<IProps> = ({ title, slug, date }) => {
  return (
    <StyledHeader rhythm={rhythm(1.2)}>
      <StyledH1 scale={scale(0.5)} rhythm={rhythm(0.2)} itemProp="name headline">
        {slug ? <StyledH1Link to={slug!}>{title}</StyledH1Link> : title}
      </StyledH1>
      <p className="post-meta">
        <StyledTime dateTime={date} scale={scale(-0.1)} itemProp="datePublished">
          {date}
        </StyledTime>
      </p>
    </StyledHeader>
  );
};

export default PostHeader;
