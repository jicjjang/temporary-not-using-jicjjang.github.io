import * as React from 'react';

import SEO from '~/components/SEO';

interface IProps {
  title: string;
  url: string;
}

const ResumeLayout: React.SFC<React.PropsWithChildren<IProps>> = ({ children, title, url }) => {
  return (
    <>
      <SEO title={title} link={RESUME_LIB.link} script={RESUME_LIB.script} url={url} />
      {children}
    </>
  );
};

const RESUME_LIB = {
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
    },
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.min.css'
    },
    {
      rel: 'stylesheet',
      href: '/css/resume/styles-1.css'
    }
  ],
  script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js'
    },
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/js/bootstrap.min.js'
    }
  ]
};

export default ResumeLayout;
