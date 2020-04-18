import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';

const TITLE = 'Archive';

export default ({ location }: PageProps) => {
  return (
    <>
      <SEO title={TITLE} />
      <Layout title={TITLE} pathname={location.pathname}>
        <div>{TITLE}</div>
      </Layout>
    </>
  );
};
