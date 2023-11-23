import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Gatsby Starter for Portfolio Minimal" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <InterestsSection sectionId="details" heading="Details" />
        <ProjectsSection
          sectionId="portfolio"
          heading="What I've been working on lately..."
        />
        <ContactSection sectionId="github" heading="Let's Connect!" />
      </Page>
    </>
  );
}
