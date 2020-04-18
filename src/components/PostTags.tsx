import * as React from 'react';
import styled, { css } from 'styled-components';
import { BaseLine } from 'typography';

import { scale } from '~/configs/typography';
import { Maybe } from '~/gatsby-graphql-types';

const StyledPTags = styled.p<{ scale: BaseLine; isInlineBlock: boolean }>`
  color: #898989;
  font-size: ${props => props.scale.fontSize};
  line-height: ${props => props.scale.lineHeight};
  ${props =>
    props.isInlineBlock &&
    css`
      display: inline-block;
    `}
`;

interface IProps {
  tags: Maybe<string>[];
  isInlineBlock?: boolean;
}

const PostTags: React.SFC<IProps> = ({ tags, isInlineBlock = false }) => (
  <StyledPTags isInlineBlock={isInlineBlock} scale={scale(-0.1)}>
    {tags.map(tag => (tag ? `#${tag} ` : ''))}
  </StyledPTags>
);

export default PostTags;
