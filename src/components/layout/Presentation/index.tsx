import * as React from 'react';
import { useState, useEffect, useCallback } from 'react';

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

const PresentationLayout: React.FunctionComponent<React.PropsWithChildren<IProps>> = ({
  title,
  // pathname = '/',
  description,
  children
}) => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  let isInitLoadedReveal = false;
  const repeatEvent = setInterval(
    useCallback(() => {
      if (typeof window !== 'undefined') {
        if (window.Reveal && !isInitLoadedReveal) {
          initLoadedReveal();
          isInitLoadedReveal = true;
        }

        if (window.Reveal && !isLoaded) {
          if (window.Reveal.isReady()) {
            console.log('ready');
            clearInterval(repeatEvent);
            setIsLoaded(true);
          } else {
            initLoadedReveal();
          }
        }
      }
    }, [isLoaded]),
    300
  );

  const initLoadedReveal = () => {
    Reveal.initialize({
      dependencies: [
        { src: '/js/presentation/notes.min.js', async: true },
        {
          src: '/js/presentation/highlight.min.js',
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
    if (isLoaded) {
      console.log('layout');
      window.Reveal?.layout(); // display가 block이 된 다음 layout을 다시 해야함
    }
  }, [isLoaded]);

  return (
    <>
      <SEO title={title} description={description} link={REVEAL_LIB.link} script={REVEAL_LIB.script} />
      <div className="reveal" style={{ position: 'absolute', display: isLoaded ? 'block' : 'none' }}>
        {children}
      </div>
    </>
  );
};

export default PresentationLayout;

/**
 * @description 스크립트를 히스토리 이동 시, 여러번 호출하는게 낭비같아서 window.Reveal이 있을 시 로드를 안하게 했더니 initialize나 layout을 다시 해도 화면이 안나옴
 */
const REVEAL_LIB = {
  link: [
    { rel: 'stylesheet', href: '/css/presentation/reveal.min.css' },
    { rel: 'stylesheet', href: '/css/presentation/black.min.css' },
    { rel: 'stylesheet', href: '/css/presentation/zenburn.min.css' }
  ],
  script: [
    {
      src: '/js/presentation/reveal.min.js'
    },
    {
      src: '/js/presentation/head.min.js'
    }
  ]
};
