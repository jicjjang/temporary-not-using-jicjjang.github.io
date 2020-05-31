import * as React from 'react';
import styled from 'styled-components';
import { BaseLine } from 'typography';
import { Link } from 'gatsby';

import { scale, rhythm } from '~/configs/typography';
import { StyledCommonH1Title } from '~/components/common';
import speech from '~/utils/speech';

const StyledHeader = styled.header<{ rhythm: string }>`
  margin-bottom: ${props => props.rhythm};
`;

const StyledH1Link = styled(Link)`
  color: #000;
  &:hover {
    color: #172fde;
  }
`;

const StyledSpeechSpan = styled.span`
  display: inline-block;
  width: 30px;
  height: 30px;
  background-image: url(/img/post/speaker.png);
  background-size: 22px;
  background-repeat: no-repeat;
  background-position: 6px 10px;
  &:active {
    background-position: 6px 11px;
  }
`;

const StyledTime = styled.time<{ scale: BaseLine }>`
  color: #898989;
  font-size: ${props => props.scale.fontSize};
  line-height: ${props => props.scale.lineHeight};
`;

interface IProps {
  title: string;
  path?: string;
  date: string;
  isPost?: boolean;
}

const PostHeader: React.SFC<IProps> = ({ title, path, date, isPost = false }) => {
  return (
    <StyledHeader rhythm={rhythm(1.2)}>
      <StyledCommonH1Title scale={scale(0.5)} rhythm={rhythm(0.2)}>
        {path ? <StyledH1Link to={path!}>{title}</StyledH1Link> : title}
        {isPost && <StyledSpeechSpan onClick={() => speech.sendMessage('안녕하세요 재밌어요')} />}
      </StyledCommonH1Title>
      <p className="post-meta">
        <StyledTime dateTime={date} scale={scale(-0.1)}>
          {date}
        </StyledTime>
      </p>
    </StyledHeader>
  );
};

export default PostHeader;
