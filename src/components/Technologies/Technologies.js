import React from "react";
import "./Tech.css";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";
const theme = {
  breakpoints: {
    sm: "480px",
    md: "720px",
  },
};

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      With a strong foundation in software development, I've effectively
      navigated diverse technologies and projects
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <IoLogoJavascript color="grey" size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Languages</ListTitle>
          <ListParagraph>
            C++, Javascript, Java(Core) , SQL, Html, Css
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact color="grey" size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Frameworks/DataBase</ListTitle>
          <ListParagraph>
            ReactJs, NodeJS, ExpressJS, SQL Server, MongoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaGithub color="grey" size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Tools</ListTitle>
          <ListParagraph>Git, Github, AWS (learning)</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
