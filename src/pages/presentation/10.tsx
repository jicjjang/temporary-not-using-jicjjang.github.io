import * as React from 'react';
import { PageProps } from 'gatsby';

import PresentationLayout from '~/components/layout/Presentation';
import { PRESENTATION_DATA, removeTrailingSlash } from '~/configs/urls';

export default function graphqlStartClient({ location: pLocation }: PageProps) {
  return (
    <PresentationLayout title={PRESENTATION_DATA[removeTrailingSlash(pLocation.pathname)].title || ''}>
      <div className="slides">
        {/* <section data-background="https://www.sentry.dev/_assets2/static/index-header-xs-bea9f1bf603543e2684094d33616d059.jpg"> */}
        <section>
          <p style={{ margin: '20px 0 0 0', fontSize: '120px' }}>Sentry</p>
          <p style={{ margin: '20px 0 0 0', fontSize: '40px' }}>Kakaopay 세미나</p>

          <aside className="notes">
            안녕하세요. 투자파티 Jed 입니다. 예전에 한번 센트리를 파 본 기억이 있어서 리뷰를 해보려고 합니다.
          </aside>
        </section>

        <section>
          <div>
            <h2>진행 순서</h2>
            <ul style={{ margin: '0' }}>
              <li className="fragment">센트리, 왜 써야 하나</li>
              <li className="fragment">기왕 쓸거면 잘 좀...</li>
              <li className="fragment">세팅1</li>
              <li className="fragment">세팅2</li>
              <li className="fragment">마무리</li>
            </ul>
          </div>
        </section>

        <section>
          <section>
            <div>
              <h2>센트리 왜 써야 하나</h2>
              <div
                className="fragment"
                style={{
                  width: '80%',
                  margin: '0 auto'
                }}>
                <img src="/img/presentation/sentry/graph.png" alt="graph" />
              </div>
              <div className="fragment">손발 덜덜 떨리는 버그...</div>
            </div>
            <aside className="notes">zzz</aside>
          </section>
          <section>
            <div>
              <h2>센트리 왜 써야 하나</h2>
              <div className="fragment">안 쓸 이유가 없음... 다만</div>
              <div className="fragment">
                안쓰는 것 보다 <span style={{ color: 'blue' }}>"잘"</span> 쓰는게 중요함
              </div>
            </div>
            <aside className="notes">zzz</aside>
          </section>
        </section>

        <section>
          <section>
            <h2>기왕 쓸거면 잘좀...</h2>
            <div>
              <div className="fragment">
                <img src="/img/presentation/sentry/example1.png" alt="example1" />
              </div>
              <div className="fragment">하나도 알아볼 수 없네...</div>
              <br />
              <div className="fragment" style={{ fontSize: '30px' }}>
                (는 사실 못알아보는게 맞습니다. 누가 리액트 코드 sourcemap 파일을 서비스에 제공해요... 내 코드다~
                생각해봅시다)
              </div>
            </div>
            <aside className="notes">...</aside>
          </section>
          <section>
            <h2>기왕 쓸거면 잘좀...</h2>
            <div>
              <div className="fragment">
                <img src="/img/presentation/sentry/example2.png" alt="example2" />
              </div>
              <div className="fragment">내 코드를 이렇게 짜라란~</div>
            </div>
            <aside className="notes">...</aside>
          </section>
        </section>

        <section>
          <section>
            <h2>세팅1</h2>
            <div>
              <div className="fragment">기왕 삽질한거 좀 나누며 삽시다</div>
              <div className="fragment">
                <img src="/img/presentation/sentry/example3.png" alt="example3" />
              </div>
              <div className="fragment">마케팅 포털이라는 좋은 재료</div>
            </div>
            <aside className="notes">
              어제(7/8) 빌리에게 들었던 일... 슬라이딩 도어가 모하와 달라서 혼자 고소하고 난리쳐서 이겼는데, 나머진
              고소없이 무상수리...! 같이 나눕시다!
              <br />
              저도 개발을 나누고 아직 세팅 안된 프로젝트도 나누고...
            </aside>
          </section>
          <section>
            <h2>세팅1</h2>
            <div>
              <div>
                <img src="/img/presentation/sentry/code1.png" alt="code1" />
              </div>
              <div>ErrorBoundary 내의 코드 세팅</div>
            </div>
            <aside className="notes">...</aside>
          </section>
          <section>
            <h2>세팅1</h2>
            <div>
              <div>
                <img src="/img/presentation/sentry/code2.png" alt="code2" />
              </div>
              <div>src/index.tsx 내의 sentry init</div>
            </div>
            <aside className="notes">...</aside>
          </section>
          <section>
            <h2>세팅1</h2>
            <div>
              <div>
                <img src="/img/presentation/sentry/code3.png" alt="code3" />
              </div>
              <div>SentryWrapper Util까지...</div>
            </div>
            <aside className="notes">...</aside>
          </section>
          <section>
            <h2>세팅1</h2>
            <div>
              <div>도와줘요 Jackdaw!</div>
              <div style={{ margin: '0 auto', width: '60%' }}>
                <img src="/img/presentation/sentry/jackdaw.png" alt="jackdaw" style={{ width: '100%' }} />
              </div>
              <div>너무 잘쓰고있음 ㅋㅋㅋ</div>
            </div>
            <aside className="notes">...</aside>
          </section>
          <section>
            <h2>세팅1</h2>
            <div>
              <div>준비물 1</div>
              <div style={{ margin: '0 auto' }}>
                <img src="/img/presentation/sentry/config1.png" alt="config1" />
              </div>
              <div>.sentryclirc 설정 파일</div>
            </div>
            <aside className="notes">...</aside>
          </section>
          <section>
            <h2>세팅1</h2>
            <div>
              <div>준비물 2</div>
              <div style={{ margin: '0 auto' }}>
                <img src="/img/presentation/sentry/config2.png" alt="config2" />
              </div>
              <div>@sentry/webpack-plugin 설정 파일</div>
              <br />
              <div>(사진엔 더 있지만 이것만 있으면 됩니다.)</div>
              <div className="fragment">(Jackdaw를 사용하기 위한 @kakaopay.dev/async-file-loader까지!)</div>
            </div>
            <aside className="notes">...</aside>
          </section>
        </section>

        <section>
          <section>
            <h2>세팅2</h2>
            <div>
              <div>아니 근데... 기존에도 marketing-portal엔 설정이 잘 되어있었는데?</div>
              <div style={{ margin: '0 auto' }}>
                <img src="/img/presentation/sentry/sentry_release_artifacts.png" alt="sentry_release_artifacts" />
              </div>
              <div>아니 잘 되어있었는데 왜 안돼? 🤷🏻‍♂️</div>
            </div>
            <aside className="notes">...</aside>
          </section>
          <section>
            <h2>세팅2</h2>
            <div>
              <div>공식문서</div>
              <div style={{ margin: '0 auto' }}>
                <a href="https://docs.sentry.io/platforms/javascript/sourcemaps/">공식 문서를 좀 봐야겠죠?</a>
              </div>
            </div>
            <aside className="notes">...</aside>
          </section>
          <section>
            <h2>세팅2</h2>
            <div>
              <div className="fragment">
                <a href="https://docs.sentry.io/platforms/javascript/sourcemaps/">1. typescript</a>
              </div>
              <div style={{ margin: '0 auto', width: '60%' }}>
                <img src="/img/presentation/sentry/setting1.png" alt="setting1" style={{ width: '100%' }} />
              </div>
              <div>marketing-portal에는 이 설정이 없어보여요 ㅠㅠ</div>
            </div>
            <aside className="notes">...</aside>
          </section>
          <section>
            <h2>세팅2</h2>
            <div>
              <div className="fragment">
                <a href="https://docs.sentry.io/platforms/javascript/sourcemaps/">2. uglifyjs (현 terser)</a>
              </div>
              <div style={{ margin: '0 auto' }}>
                <img src="/img/presentation/sentry/setting2-1.png" alt="setting2-1" />
              </div>
              <div>기존에 제가 사용하던 프로젝트에는 uglifyjs에서 sourcemap 관련 옵션을 열어줬어요</div>
            </div>
            <aside className="notes">...</aside>
          </section>
          <section>
            <h2>세팅2</h2>
            <div>
              <div className="fragment">
                <a href="https://docs.sentry.io/platforms/javascript/sourcemaps/">2. uglifyjs (현 terser)</a>
              </div>
              <div style={{ margin: '0 auto' }}>
                <img src="/img/presentation/sentry/setting2-2.png" alt="setting2-2" />
              </div>
              <div>CRA라 빌드 과정 log가 많음. terser plugin은 가려져 있음...</div>
              <div>
                <a href="https://webpack.js.org/plugins/terser-webpack-plugin/#sourcemap">기본값은 false</a>
              </div>
            </div>
            <aside className="notes">...</aside>
          </section>
        </section>

        <section>
          <section>
            <h2>마무리</h2>
            <div>
              솔직히 이렇게 해도 안될 수 있음. 고민할 부분이 많음. / 센트리 서버가 불안정함하고 sourcemap 맵핑이
              간헐적으로 안됨. 잘 안올라감 / sourcemap 코드는 실제 tenth에는 올리지 않음....
            </div>
          </section>
          <section>
            <h2>Q&amp;A</h2>
          </section>
        </section>

        <section>
          <h1>끝</h1>
          <div>감사합니다.</div>
        </section>
      </div>
    </PresentationLayout>
  );
}
