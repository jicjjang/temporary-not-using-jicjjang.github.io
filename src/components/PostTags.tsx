import * as React from 'react';
import styled from 'styled-components';
import { BaseLine } from 'typography';

import { scale } from '~/configs/typography';
import { Maybe } from '~/gatsby-graphql-types';

const StyledPTags = styled.p<{ scale: BaseLine }>`
  color: #898989;
  font-size: ${props => props.scale.fontSize};
  line-height: ${props => props.scale.lineHeight};
`;

interface IProps {
  tags: Maybe<string>[];
}

const PostTags: React.SFC<IProps> = ({ tags }) => (
  <StyledPTags scale={scale(-0.1)}>{tags.map(tag => (tag ? `#${tag} ` : ''))}</StyledPTags>
);

export default PostTags;
