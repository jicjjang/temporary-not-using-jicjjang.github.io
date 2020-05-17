import * as React from 'react';
import { useState, useEffect } from 'react';

import SEO from '~/components/SEO';

declare var Reveal: RevealStatic & {
  isReady: () => boolean;
};
declare var window: Window & {
  Reveal?: RevealStatic & {
    isReady: () => boolean;
  };
};

interface IProps {
  title: string;
  pathname?: string;
  description?: string;
}

const PresentationLayout: React.SFC<React.PropsWithChildren<IProps>> = ({
  title,
  // pathname = '/',
  description,
  children
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  const initLoadedReveal = () => {
    Reveal.initialize({
      dependencies: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/notes/notes.min.js', async: true },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/plugin/highlight/highlight.min.js',
          async: true,
          callback: () => {
            //@ts-ignore
            hljs.initHighlightingOnLoad();
          }
        }
      ],
      minScale: 0.66,
      maxScale: 0.66
    });
  };

  useEffect(() => {
    if (window.Reveal && !isLoaded) {
      initLoadedReveal();
    }

    const repeatEvent = setInterval(() => {
      if (window.Reveal && !isLoaded) {
        if (window.Reveal.isReady()) {
          console.log('ready');
          clearInterval(repeatEvent);
          setIsLoaded(true);
        } else {
          initLoadedReveal();
        }
      }
    }, 300);
  }, [window.Reveal]);

  useEffect(() => {
    if (isLoaded) {
      console.log('layout');
      window.Reveal?.layout(); // display가 block이 된 다음 layout을 다시 해야함
    }
  }, [isLoaded]);

  return (
    <>
      <SEO
        title={title}
        description={description}
        link={[
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/css/reveal.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/css/theme/black.min.css' },
          { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/lib/css/zenburn.min.css' }
        ]}
        script={[
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/js/reveal.min.js'
          },
          {
            src: 'https://cdnjs.cloudflare.com/ajax/libs/reveal.js/3.6.0/lib/js/head.min.js'
          }
        ]}
      />
      <div className="reveal" style={{ position: 'absolute', display: isLoaded ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  );
};

export default PresentationLayout;
