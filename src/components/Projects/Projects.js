import React from "react";
import Button from "react-bootstrap/Button";
import styled, { ThemeProvider } from "styled-components";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";
const theme = {
  breakpoints: {
    sm: "480px",
    md: "720px",
  },
};
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <ThemeProvider theme={theme}>
      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <Button
                  href={p.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-info"
                >
                  Frontend
                </Button>
                <Button
                  href={p.visit}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline-warning"
                >
                  Backend
                </Button>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </ThemeProvider>
  </Section>
);

export default Projects;
