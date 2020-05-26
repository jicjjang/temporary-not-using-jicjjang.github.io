import * as React from 'react';
import { useEffect } from 'react';
import { PageProps, graphql } from 'gatsby';

import ResumeLayout from '~/components/layout/Resume';
import { Query } from '~/gatsby-graphql-types';
import SideBar from '~/components/resume/SideBar';
import Introduce from '~/components/resume/Introduce';
import Experiences from '~/components/resume/Experiences';
import Projects from '~/components/resume/Projects';
import Skills from '~/components/resume/Skills';
import Others from '~/components/resume/Others';
import Footer from '~/components/resume/Footer';

import resumeData from '~/configs/resume.json';
import { IResumeExperience } from '~/components/resume/Experiences';
import { IResumeProject } from '~/components/resume/Projects';
import { IResumeSkill } from '~/components/resume/Skills';

interface IResumeData {
  experience: IResumeExperience[];
  project: IResumeProject[];
  skill: IResumeSkill[];
}

const TITLE = 'Resume';

export default function Resume({ data }: PageProps) {
  const siteUrl = (data as Query).site!.siteMetadata!.siteUrl || '';
  const social = (data as Query).site!.siteMetadata!.social;

  const { experience, project, skill }: IResumeData = resumeData;

  useEffect(() => {
    const allLevelBar = document.querySelectorAll<HTMLDivElement>('.level-bar-inner');

    allLevelBar.forEach((levelBar: HTMLDivElement) => {
      levelBar.style.width = '0';
      const level = levelBar.getAttribute('data-level');

      if (levelBar && levelBar.animate) {
        const levelBarAnimation = levelBar.animate([{ width: '0' }, { width: level }], 800);

        const finishEvent = () => {
          levelBar.style.width = level || '0';
          levelBar.removeEventListener('finish', finishEvent);
        };
        levelBarAnimation.addEventListener('finish', finishEvent);
      } else {
        levelBar.style.width = level || '0';
      }
    });
  }, []);

  return (
    <ResumeLayout title={TITLE} url={`${siteUrl}/resume`}>
      <main>
        <div className="wrapper">
          <SideBar siteUrl={siteUrl!} mail={social?.mail || ''} github={social?.github || ''} />
          <div className="main-wrapper">
            <Introduce />
            <Experiences experienceContents={experience} />
            <Projects projectContents={project} />
            <Skills skillContents={skill} />
            <Others />
          </div>
        </div>
        <Footer />
      </main>
    </ResumeLayout>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        siteUrl
        social {
          github
          mail
        }
      }
    }
  }
`;
