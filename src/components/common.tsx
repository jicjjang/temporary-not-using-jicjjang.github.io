import styled from 'styled-components';
import { BaseLine } from 'typography';

export const StyledH1Title = styled.h1<{ scale: BaseLine; rhythm: string }>`
  color: #000;
  margin-bottom: ${props => props.rhythm};
  border-bottom: none;
  font-size: ${props => props.scale.fontSize};
  font-weight: 500;
  line-height: ${props => props.scale.lineHeight};
`;
