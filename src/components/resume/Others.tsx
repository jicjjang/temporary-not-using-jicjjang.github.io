import * as React from 'react';

const Others = () => {
  return (
    <section className="section">
      <h2 className="section-title">
        <i className="fa fa-star" />
        Others
      </h2>
      <div className="upper-row">
        <h4>
          <a className="title" href="/presentation/3" target="_blank">
            발표자료
          </a>
        </h4>
        <div>
          17년 OSS 개발자 방학 캠프에서 발표한 발표자료 입니다.
          <br />
          제가 개발을 하면서 현재까지 오게 된 과정에 대해 설명해보았습니다.
        </div>
      </div>
      <br />
      <div>&lt;포커스를 프레젠테이션에 두고 's' 키를 누르면 발표자 화면이 나옵니다.&gt;</div>
      <div>&lt;포커스를 프레젠테이션에 두고 'f' 키를 누르면 전체 화면이 나옵니다.&gt;</div>
    </section>
  );
};

export default Others;
