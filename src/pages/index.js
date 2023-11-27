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
      <Seo title="John Clampet" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About Me" />
        <InterestsSection sectionId="details" heading="Skills " />
        <ProjectsSection
          sectionId="portfolio"
          heading="What I've been working on lately..."
        />
        <ContactSection sectionId="contact" heading="Let's Connect!" />
      </Page>
    </>
  );
}
