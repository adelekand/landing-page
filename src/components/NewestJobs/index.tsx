import React from "react";
import styled from "styled-components/macro";
import {
  Section,
  SectionWrapper,
  SectionTitle,
  SectionHeading,
  ActionButton,
  Arrow
} from "../Section";
import JobItem from "../JobItem";

const JobList = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 50px;
  }

  @media only screen and (max-width: 560px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 50px;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 50px;
  }
`;

export interface Job {
  id: number;
  title: string;
  time: string;
  company: string;
  location: string;
  description: string;
}

interface NewestJobsProps {
  jobs: Job[];
}

const NewestJobs: React.FC<NewestJobsProps> = ({ jobs }) => {
  return (
    <SectionWrapper>
      <Section>
        <SectionHeading>
          <SectionTitle>Newest Job Offers</SectionTitle>
          <ActionButton>
            <span>View all job offers</span> <Arrow />
          </ActionButton>
        </SectionHeading>
        <JobList>
          {jobs.map((job) => (
            <JobItem key={job.id} job={job} />
          ))}
        </JobList>
      </Section>
    </SectionWrapper>
  );
};

export default NewestJobs;
