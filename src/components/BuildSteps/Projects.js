import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addProject,
  changeProject,
  removeProject,
} from "../../store/projectSlice";

const Projects = () => {
  const dispatch = useDispatch();
  const ProjectsList = useSelector((state) => state.projects);

  const addProjects = () => {
    const newProject = {
      id: ProjectsList.length + 1,
      title: "",
      description: "",
      url: "",
    };

    dispatch(addProject(newProject));
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    dispatch(changeProject({ id, name, value }));
  };

  return (
    <div>
      {ProjectsList.map((project) => (
        <Accordion
          allowMultiple
          width="100%"
          maxW="lg"
          rounded="lg"
          key={project.id}
        >
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
                <Text fontWeight="semibold">
                  {project.title ? project.title : "Title Will come here"}
                </Text>
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
                <Input
                  placeholder="Project Title"
                  variant="filled"
                  mb={4}
                  value={project.title}
                  name="title"
                  onChange={(e) => handleChange(e, project.id)}
                />

                <Input
                  placeholder="Project Link"
                  variant="filled"
                  mb={4}
                  value={project.url}
                  name="url"
                  onChange={(e) => handleChange(e, project.id)}
                />

                <Textarea
                  placeholder="Project Description"
                  variant="filled"
                  mb={4}
                  value={project.description}
                  name="description"
                  onChange={(e) => handleChange(e, project.id)}
                />

                <Button
                  colorScheme="red"
                  variant="solid"
                  onClick={() => {
                    dispatch(removeProject(project.id));
                  }}
                >
                  Remove Project
                </Button>
              </VStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}

      {ProjectsList.length < 4 && (
        <Button colorScheme="blue" variant="solid" mt={4} onClick={addProjects}>
          Add Projects
        </Button>
      )}
    </div>
  );
};

export default Projects;
