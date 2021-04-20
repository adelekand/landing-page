import { createGlobalStyle } from "styled-components";
import HeroSection from "./components/HeroSection";
import NewestJobs from "./components/NewestJobs";
import FeaturedCompanies from "./components/FeaturedCompanies";
import { newestJobs as jobs, featuredCompanies as compaines } from "./data";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Manrope';
  }

  html, body {
    overflow-x: hidden;
  }
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      <HeroSection />
      <NewestJobs jobs={jobs} />
      <FeaturedCompanies companies={compaines} />
    </>
  );
}
