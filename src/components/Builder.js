import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import About from "./BuildSteps/About";
import Education from "./BuildSteps/Education";
import Skills from "./BuildSteps/Skills";
import Experience from "./BuildSteps/Experience";
import Projects from "./BuildSteps/Projects";

const Builder = () => {
  return (
    <Box
      w={{ base: "full", md: "50%" }}
      p={4}
      bg={"white"}
      borderRadius={8}
      boxShadow={"md"}
    >
      <Tabs>
        <TabList>
          <Tab>About</Tab>
          <Tab>Education</Tab>
          <Tab>Skills</Tab>
          <Tab>Experience</Tab>
          <Tab>Projects</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <About />
          </TabPanel>
          <TabPanel>
            <Education />
          </TabPanel>
          <TabPanel>
            <Skills />
          </TabPanel>
          <TabPanel>
            <Experience />
          </TabPanel>
          <TabPanel>
            <Projects />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Builder;
