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

import { FaTrash } from "react-icons/fa";

const Experience = () => {
  const [ExperienceList, setExperienceList] = useState([]);

  const addExperience = () => {
    setExperienceList([...ExperienceList, "new"]);
  };

  return (
    <div>
      {ExperienceList.map((deg, index) => (
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
                <Text fontWeight="semibold">Position</Text>
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Input placeholder="Position" variant="filled" mb={4} />

              <HStack spacing={4}>
                <Input variant="filled" placeholder="Company" />

                <Select variant="filled" placeholder="Employment Type">
                  <option value="full-time">Full Time</option>
                  <option value="part-time">Part Time</option>
                  <option value="internship">Internship</option>
                  <option value="contract">Contract</option>
                  <option value="freelance">Freelance</option>
                </Select>
              </HStack>

              <HStack spacing={4} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Start Year</FormLabel>
                  <Input placeholder="Start Year" variant="filled" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>End Year</FormLabel>
                  <Input placeholder="End Year" variant="filled" />
                </FormControl>
              </HStack>

              <HStack spacing={4} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Discription</FormLabel>
                  <Textarea placeholder="Discription" variant="filled" />
                </FormControl>
              </HStack>

              <Button colorScheme="red" variant="solid" mt={4}>
                Delete
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}

      <Button colorScheme="blue" variant="solid" mt={4} onClick={addExperience}>
        Add Experience
      </Button>
    </div>
  );
};

export default Experience;
