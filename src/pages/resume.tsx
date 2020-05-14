import * as React from 'react';
import { PageProps } from 'gatsby';

import DefaultLayout from '~/components/layout/Default';
import SEO from '~/components/SEO';

const TITLE = 'Resume';

export default function Resume({ location }: PageProps) {
  return (
    <>
      <SEO title={TITLE} />
      <DefaultLayout title={TITLE} pathname={location.pathname}>
        <div>{TITLE}</div>
      </DefaultLayout>
    </>
  );
}
