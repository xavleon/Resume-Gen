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
  // VStack,
} from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//import { FaTrash } from "react-icons/fa";
import {
  changeExperience,
  addExperience,
  removeExperience,
} from "../../store/experienceSlice";

const Experience = () => {
  const experienceList = useSelector((state) => state.experience);
  const dispatch = useDispatch();

  const handleAddExperience = () => {
    dispatch(addExperience());
  };

  const handleChange = (e, id) => {
    const { name, value } = e.target;
    console.log(name, value);
    dispatch(changeExperience({ id, name, value }));
  };

  return (
    <div>
      {experienceList.map((exp, index) => (
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
                  {exp.company ? exp.company : "Company"}
                </Text>
              </Box>
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Input
                value={exp.role}
                placeholder="Position"
                variant="filled"
                mb={4}
                name="role"
                onChange={(e) => handleChange(e, exp.id)}
              />

              <HStack spacing={4}>
                <Input
                  variant="filled"
                  value={exp.company}
                  placeholder="Company"
                  name="company"
                  onChange={(e) => handleChange(e, exp.id)}
                />

                <Select
                  value={exp.employmentType}
                  variant="filled"
                  placeholder="Employment Type"
                  name="employmentType"
                  onChange={(e) => handleChange(e, exp.id)}
                >
                  <option value="Full-time">Full Time</option>
                  <option value="Part-time">Part Time</option>
                  <option value="Internship">Internship</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                </Select>
              </HStack>

              <HStack spacing={4} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Start Year</FormLabel>
                  <Input
                    value={exp.start}
                    placeholder="Start Year"
                    variant="filled"
                    name="start"
                    onChange={(e) => handleChange(e, exp.id)}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>End Year</FormLabel>
                  <Input
                    value={exp.end}
                    placeholder="End Year"
                    variant="filled"
                    name="end"
                    onChange={(e) => handleChange(e, exp.id)}
                  />
                </FormControl>
              </HStack>

              <HStack spacing={4} mt={4}>
                <FormControl isRequired>
                  <FormLabel>Discription</FormLabel>
                  <Textarea
                    value={exp.description}
                    placeholder="Discription"
                    variant="filled"
                    name="description"
                    onChange={(e) => handleChange(e, exp.id)}
                  />
                </FormControl>
              </HStack>

              <Button
                onClick={() => {
                  dispatch(removeExperience(exp.id));
                }}
                colorScheme="red"
                variant="solid"
                mt={4}
              >
                Delete
              </Button>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      ))}

      {experienceList.length < 3 && (
        <Button
          colorScheme="blue"
          variant="solid"
          mt={4}
          onClick={handleAddExperience}
        >
          Add Experience
        </Button>
      )}
    </div>
  );
};

export default Experience;
