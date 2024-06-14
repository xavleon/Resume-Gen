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
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useState } from "react";

import { FaTrash } from "react-icons/fa";

const Education = () => {
  const [educationList, setEducationList] = useState([]);

  const addEducation = () => {
    setEducationList([...educationList, "new"]);
  };

  return (
    <div>
      {educationList.map((deg, index) => (
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
                <Text fontWeight="semibold">
                  Bachelor's Degree in Computer Science
                </Text>
                <FaTrash color="red" />
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              {/* Degree & Type */}

              <VStack spacing={2} align="start">
                <Input placeholder="Degree" variant="filled" />
                <Input placeholder="Type" variant="filled" />
              </VStack>

              {/* Data*/}

              <HStack spacing={4} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Start Year</FormLabel>
                  <Input placeholder="Start Year" variant="filled" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>End Year</FormLabel>
                  <Input placeholder="End Year" variant="filled" />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Grade</FormLabel>
                  <Input placeholder="Grade" variant="filled" />
                </FormControl>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}

      <Button colorScheme="blue" variant="solid" mt={4} onClick={addEducation}>
        Add Education
      </Button>
    </div>
  );
};

export default Education;
