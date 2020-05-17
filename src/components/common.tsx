import styled from 'styled-components';
import { BaseLine } from 'typography';

export const StyledCommonH1Title = styled.h1<{ scale: BaseLine; rhythm: string }>`
  color: #000;
  margin-bottom: ${props => props.rhythm};
  border-bottom: none;
  font-size: ${props => props.scale.fontSize};
  font-weight: 500;
  line-height: ${props => props.scale.lineHeight};
`;

export const StyledCommonArticle = styled.article<{ rhythm: string }>`
  margin-bottom: ${props => props.rhythm};
`;

export const StyledCommonDivPost = styled.div<{ rhythm: string }>`
  margin-bottom: ${props => props.rhythm};
`;

export const StyledCommonDivEmpty = styled.div<{ rhythm: string }>`
  text-align: center;
  margin-top: ${props => props.rhythm};
`;
