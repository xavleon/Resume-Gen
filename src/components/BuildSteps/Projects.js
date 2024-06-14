import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Projects = () => {
  const [ProjectsList, setProjectsList] = useState([]);

  const addProjects = () => {
    setProjectsList([...ProjectsList, "new"]);
  };

  return (
    <div>
      {ProjectsList.map((deg, index) => (
        <Accordion allowMultiple width="100%" maxW="lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Box
                flex="1"
                textAlign="left"
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Text fontWeight="semibold">Project Title</Text>
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <VStack
                spacing={4}
                align="start"
                width="100%"
                maxW="lg"
                rounded="lg"
              >
                <Input placeholder="Project Title" variant="filled" mb={4} />

                <Input placeholder="Project Link" variant="filled" mb={4} />

                <Textarea
                  placeholder="Project Description"
                  variant="filled"
                  mb={4}
                />

                <Button colorScheme="red" variant="solid">
                  Remove Project
                </Button>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}

      <Button colorScheme="blue" variant="solid" mt={4} onClick={addProjects}>
        Add Projects
      </Button>
    </div>
  );
};

export default Projects;
