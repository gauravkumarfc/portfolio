import React from "react";
import {
  BlogCard,
  CardInfo,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  Img,
} from "../Projects/ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { experience } from "../../constants/experience";

const Experience = () => {
  return (
    <Section nopadding id="Experience">
      <SectionDivider />
      <SectionTitle main>Experience</SectionTitle>
      <GridContainer>
        {experience.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <div style={{ color: "#ffffb9" }}>
                  {p.role}
                  <div>{p.time}</div>
                </div>
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
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default Experience;
