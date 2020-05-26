import * as React from 'react';

interface IResumeProjectContent {
  link?: string;
  title: string;
  content: string;
}

export interface IResumeProject {
  company: string;
  contents: IResumeProjectContent[];
}

interface IProps {
  projectContents: IResumeProject[];
}

const Company = ({ name }: { name: string }) => {
  return <div style={{ color: '#317787', fontSize: '20px', margin: '14px 0', fontWeight: 'bold' }}>{name}</div>;
};

const Project = ({ link, title, content }: IResumeProjectContent) => {
  return (
    <div className="item">
      <span className="project-title">
        {link ? (
          <a href={link} target="_blank">
            {title}
          </a>
        ) : (
          title
        )}
      </span>{' '}
      - <span className="project-tagline" dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

const Projects = ({ projectContents }: IProps) => {
  return (
    <section className="section projects-section">
      <h2 className="section-title">
        <i className="fa fa-archive" />
        Projects
      </h2>
      <div className="intro">
        <p>제가 지금까지 경험했던 프로젝트 목록입니다.</p>
      </div>
      {projectContents.map((projects: IResumeProject) => (
        <React.Fragment key={projects.company}>
          <Company name={projects.company} />
          {projects.contents.map((project: IResumeProjectContent) => (
            <Project {...project} key={project.title} />
          ))}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Projects;
