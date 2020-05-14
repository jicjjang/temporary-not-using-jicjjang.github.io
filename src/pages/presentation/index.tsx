import * as React from 'react';
import { PageProps } from 'gatsby';

import DefaultLayout from '~/components/layout/Default';
import SEO from '~/components/SEO';

const TITLE = 'Presentation';

export default function Presentation({ location }: PageProps) {
  return (
    <>
      <SEO title={TITLE} />
      <DefaultLayout title={TITLE} pathname={location.pathname}>
        <div>{TITLE}</div>
      </DefaultLayout>
    </>
  );
}
