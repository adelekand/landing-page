import React from "react";
import styled from "styled-components/macro";
import {
  Section,
  SectionWrapper,
  SectionTitle,
  SectionHeading
} from "../Section";
import CompanyItem from "../CompanyItem";

const CompanyList = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  width: 100%;

  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 50px;
  }

  @media only screen and (max-width: 960px) {
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 50px;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 50px;
  }

  @media only screen and (max-width: 560px) {
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 50px;
  }
`;

export interface Company {
  id: number;
  name: string;
}

interface FeaturedCompaniesProps {
  companies: Company[];
}

const FeaturedCompanies: React.FC<FeaturedCompaniesProps> = ({ companies }) => {
  return (
    <SectionWrapper style={{ marginTop: 70, marginBottom: 100 }}>
      <Section>
        <SectionHeading>
          <SectionTitle>Featured Companies</SectionTitle>
        </SectionHeading>
        <CompanyList>
          {companies.map((company) => (
            <CompanyItem key={company.id} company={company} />
          ))}
        </CompanyList>
      </Section>
    </SectionWrapper>
  );
};

export default FeaturedCompanies;
