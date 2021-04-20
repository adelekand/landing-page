import styled from "styled-components/macro";
import { IoMdArrowRoundForward } from "react-icons/io";

export const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Section = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
`;

export const SectionHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;

export const SectionTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  letter-spacing: 0px;
  color: #141414;
  opacity: 1;

  @media only screen and (max-width: 768px) {
    font-size: 28px;
  }

  @media only screen and (max-width: 560px) {
    font-size: 24px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ActionButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #276ffb;

  span {
    font-size: 18px;
    font-weight: bold;

    @media only screen and (max-width: 768px) {
      font-size: 16px;
    }

    @media only screen and (max-width: 560px) {
      font-size: 14px;
    }

    @media only screen and (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

export const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.2rem;
`;
