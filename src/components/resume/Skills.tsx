import * as React from 'react';

export interface IResumeSkill {
  title: string;
  level: number;
}

interface IProps {
  skillContents: IResumeSkill[];
}

const Skill = ({ title, level }: IResumeSkill) => (
  <div className="item">
    <h3 className="level-title">{title}</h3>
    <div className="level-bar">
      <div className="level-bar-inner" data-level={`${level}%`} style={{ width: 0 }} />
    </div>
  </div>
);

const Skills = ({ skillContents }: IProps) => (
  <section className="skills-section section">
    <h2 className="section-title">
      <i className="fa fa-rocket" />
      Skills &amp; Proficiency
    </h2>
    <div className="skillset">
      {skillContents.map((skill: IResumeSkill) => (
        <Skill {...skill} key={skill.title} />
      ))}
    </div>
  </section>
);

export default Skills;
