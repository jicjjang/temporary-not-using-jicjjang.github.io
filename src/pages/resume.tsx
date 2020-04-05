import * as React from 'react';
import { PageProps } from 'gatsby';

import Layout from '~/components/Layout';
import SEO from '~/components/SEO';

export default ({ location }: PageProps) => {
  return (
    <>
      <SEO title="Resume" />
      <Layout title={'Resume'} pathname={location.pathname}>
        <div>Resume</div>
      </Layout>
    </>
  );
};
