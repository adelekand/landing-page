import React from "react";
import styled from "styled-components/macro";
import Button from "../Button";
import { Section } from "../Section";
import Banner from "../../assets/images/banner.png";

const StyledHeroSection = styled.div`
  height: 540px;
  width: 100%;
  margin-bottom: 70px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: url(${Banner}) top left/cover no-repeat;

  @media only screen and (max-width: 768px) {
    height: 480px;
  }

  @media only screen and (max-width: 560px) {
    height: 400px;
  }

  @media only screen and (max-width: 480px) {
    height: 320px;
  }
`;

const SectionDescription = styled.div`
  margin-bottom: 151px;

  h2,
  p {
    color: #fff;
    opacity: 1;
    letter-spacing: 0;
    text-align: left;
  }

  h2 {
    font-size: 48px;
  }

  p {
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 25px;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 70px;

    h2 {
      font-size: 32px;
    }

    p {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 560px) {
    margin-bottom: 70px;

    h2 {
      font-size: 28px;
    }

    p {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 480px) {
    margin-bottom: 70px;

    h2 {
      font-size: 24px;
    }

    p {
      font-size: 12px;
    }
  }
`;

const HeroSection: React.FC = () => {
  return (
    <StyledHeroSection>
      <Section>
        <SectionDescription>
          <h2>Juniors Make IT work.</h2>
          <p>Hire and invest in highly skilled juniors now.</p>
          <Button onClick={() => console.log("click me")}>
            Post Offer Now
          </Button>
        </SectionDescription>
      </Section>
    </StyledHeroSection>
  );
};

export default HeroSection;
