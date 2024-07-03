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

import {
  addEducation,
  changeEducation,
  removeEducation,
} from "../../store/educationSlice";

import { useDispatch, useSelector } from "react-redux";

const Education = () => {
  const educationList = useSelector((state) => state.education);
  const dispatch = useDispatch();

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    dispatch(changeEducation({ id, name, value }));
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
                  {deg.degree ? deg.degree : "Title"}
                </Text>

                <FaTrash
                  onClick={() => {
                    dispatch(removeEducation(deg.id));
                  }}
                  color="red"
                />
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              {/* Degree & Type */}

              <VStack spacing={2} align="start">
                <Input
                  value={deg.degree}
                  placeholder="Degree"
                  variant="filled"
                  name="degree"
                  onChange={(e) => handleChange(e, deg.id)}
                />
                <Input
                  onChange={(e) => handleChange(e, deg.id)}
                  value={deg.type}
                  placeholder="Type"
                  name="type"
                  variant="filled"
                />
              </VStack>

              {/* Data*/}

              <HStack spacing={4} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Start Year</FormLabel>
                  <Input
                    value={deg.start}
                    placeholder="Start Year"
                    variant="filled"
                    name="start"
                    onChange={(e) => handleChange(e, deg.id)}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>End Year</FormLabel>
                  <Input
                    value={deg.end}
                    placeholder="End Year"
                    variant="filled"
                    name="end"
                    onChange={(e) => handleChange(e, deg.id)}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Grade</FormLabel>
                  <Input
                    value={deg.grade}
                    placeholder="Grade"
                    variant="filled"
                    name="grade"
                    onChange={(e) => handleChange(e, deg.id)}
                  />
                </FormControl>
              </HStack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}

      {educationList.length < 4 && (
        <Button
          colorScheme="blue"
          variant="solid"
          mt={4}
          onClick={() => dispatch(addEducation())}
        >
          Add Education
        </Button>
      )}
    </div>
  );
};

export default Education;
