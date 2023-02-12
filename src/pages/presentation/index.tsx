import * as React from 'react';
import { PageProps, graphql } from 'gatsby';

import { Query } from '~/gatsby-graphql-types';
import DefaultLayout from '~/components/layout/Default';
import { removeTrailingSlash, PRESENTATION_DATA, IPresentationData } from '~/configs/urls';
import { StyledCommonArticle, StyledCommonDivEmpty } from '~/components/common';
import PostTags from '~/components/PostTags';
import PostHeader from '~/components/PostHeader';
import { rhythm } from '~/configs/typography';

const TITLE = 'Presentation';

export default function Presentation({ data, location: pLocation }: PageProps) {
  const presentations: IPresentationData[] = [];

  (data as Query).allSitePage.edges.forEach(presentationData => {
    const path = removeTrailingSlash(presentationData.node.path);
    const data = PRESENTATION_DATA.find(data => data.path === path);

    if (data) {
      presentations.push({
        ...data
      });
    }
  });

  presentations.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <DefaultLayout title={TITLE} pathname={pLocation.pathname}>
      {presentations.length > 0 ? (
        presentations.map(({ title, tags, date, path }: IPresentationData, index: number) => (
          <StyledCommonArticle key={`${title}-${index}`} rhythm={rhythm(2)}>
            <PostHeader title={title!} path={path} date={date} />
            {tags?.length ? <PostTags tags={tags} /> : null}
          </StyledCommonArticle>
        ))
      ) : (
        <StyledCommonDivEmpty rhythm={rhythm(4)}>컨텐츠가 없습니다.</StyledCommonDivEmpty>
      )}
    </DefaultLayout>
  );
}

export const query = graphql`
  query {
    allSitePage(filter: { path: { regex: "/^\/presentation\/[\\w]/i"}}) {
      edges {
        node {
          id
          path
          matchPath
        }
      }
    }
  }
`;
