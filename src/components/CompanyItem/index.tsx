import React from "react";
import styled from "styled-components/macro";
import { Company } from "../FeaturedCompanies";
import BriefCase from "../../assets/images/icon-briefcase.png";

interface CompanyItemProps {
  company: Company;
}

const StyledCompanyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 91px;
  height: 91px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border: 1px solid #b9b9b9;
  border-radius: 87px;
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 9px;

  @media only screen and (max-width: 560px) {
    width: 80px;
    height: 80px;
  }
`;

const StyledIcon = styled.img`
  object-fit: contain;
`;

const Label = styled.h2`
  text-align: left;
  font: normal normal bold 24px/32px Manrope;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;

  @media only screen and (max-width: 560px) {
    font-size: 18px;
  }
`;

const CompanyItem: React.FC<CompanyItemProps> = ({ company }) => {
  return (
    <StyledCompanyItem>
      <IconWrapper>
        <StyledIcon src={BriefCase} alt="briefcase" />
      </IconWrapper>
      <Label>{company.name}</Label>
    </StyledCompanyItem>
  );
};

export default CompanyItem;
