import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';

const TITLE = 'Presentation';

export default function Presentation({ location }: PageProps) {
  return (
    <>
      <SEO title={TITLE} />
      <Layout title={TITLE} pathname={location.pathname}>
        <div>{TITLE}</div>
      </Layout>
    </>
  );
}
