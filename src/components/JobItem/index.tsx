import React from "react";
import styled from "styled-components/macro";
import { FaAngleRight } from "react-icons/fa";
import { Job } from "../NewestJobs";
import Button from "../Button";

const StyledJobItem = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  border-left: 1px solid #b9b9b9;

  padding-left: 25px;
  padding-right: 25px;

  :first-child {
    border: none;
    margin-left: 0;
    padding-left: 0;
  }

  :last-child {
    padding-right: 0;

    & > :last-child {
      right: 0;
    }
  }

  @media only screen and (max-width: 1200px) {
    :last-child {
      border: none;
      margin-left: 0;
      padding-left: 0;

      & > :last-child {
        right: 25px;
      }
    }

    :nth-child(2) {
      margin-right: 0;
      padding-right: 0;

      & > :last-child {
        right: 0;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    :last-child {
      padding-right: 25px;
    }
  }

  @media only screen and (max-width: 560px) {
    :first-child {
      padding-right: 0;
    }

    :last-child {
      padding-right: 0;

      & > :last-child {
        right: 0;
      }
    }

    border: none;
    margin-left: 0;
    padding-left: 0;

    & > :last-child {
      right: 0;
    }
  }
`;

const JobItemHeading = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const JobItemTitle = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  h3 {
    font: normal normal bold 24px/32px Manrope;
    letter-spacing: 0px;
    color: #276ffb;
    opacity: 1;
  }

  p {
    text-align: left;
    font: normal normal medium 18px/24px Manrope;
    letter-spacing: 0px;
    color: #141414;
    opacity: 0.6;
  }

  @media only screen and (max-width: 1200px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 16px;
    }
  }

  @media only screen and (max-width: 960px) {
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 768px) {
    h3 {
      font-size: 16px;
    }
    p {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 560px) {
    h3 {
      font-size: 14px;
    }
    p {
      font-size: 12px;
    }
  }
`;

const JobItemSubTitle = styled.p`
  text-align: left;
  font: normal normal medium 20px/27px Manrope;
  letter-spacing: 0px;
  color: #141414;
  opacity: 1;

  span:last-child {
    opacity: 0.6;
    margin-left: 21px;
  }

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 960px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }

  @media only screen and (max-width: 560px) {
    font-size: 12px;
  }
`;

const JobItemDescription = styled.p`
  width: 85%;
  margin-top: 28px;
  margin-bottom: 20px;
  font: normal normal medium 20px/27px Manrope;
  letter-spacing: 0px;
  color: #141414;
  opacity: 0.6;

  @media only screen and (max-width: 1200px) {
    font-size: 16px;
  }

  @media only screen and (max-width: 960px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 560px) {
    font-size: 12px;
  }
`;

const StyledButton = styled.div`
  position: absolute;
  bottom: 0;
  right: 25px;
`;

interface JobItemProps {
  job: Job;
}

const JobItem: React.FC<JobItemProps> = ({ job }) => {
  return (
    <StyledJobItem>
      <JobItemHeading>
        <div>
          <JobItemTitle>
            <h3>{job.title}</h3>
            <p className="post-time">{job.time}</p>
          </JobItemTitle>
        </div>
        <JobItemSubTitle>
          <span>{job.company}</span>
          <span>{job.location}</span>
        </JobItemSubTitle>
      </JobItemHeading>
      <JobItemDescription>{job.description}</JobItemDescription>
      <StyledButton>
        <Button size="sm">
          <FaAngleRight size={25} />
        </Button>
      </StyledButton>
    </StyledJobItem>
  );
};

export default JobItem;
