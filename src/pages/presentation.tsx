import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';

export default ({ location }: PageProps) => {
  return (
    <>
      <SEO title="Presentation" />
      <Layout title={'Presentation'} pathname={location.pathname}>
        <div>Presentation</div>
      </Layout>
    </>
  );
};
