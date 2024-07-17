import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button from "react-bootstrap/Button";
import Resume from "../../resume.pdf";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
          Hi, I'm Gaurav Kumar. <br />
          As a final-year Computer Engineering student at Delhi Technological
          University, I bring a strong academic background with a GPA of 8.49/10
          and a diverse skill set. Proficient in React.js, Node.js, Express.js,
          MongoDB, HTML,JAVA,JAVASCRIPT and CSS, I thrive on tackling complex
          problems head-on. With a passion for problem-solving and a dedication
          to continuous learning, I am eager to contribute my expertise to
          innovative projects and collaborative teams in the tech industry.
          Let’s connect and explore opportunities to create impactful solutions
          together.
        </SectionText>
        <a href={Resume} download="Resume" target="_blank">
          <Button variant="outline-warning">Download Resume</Button>
        </a>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
