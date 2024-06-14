import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Tag,
  TagCloseButton,
  TagLabel,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  const [input, setInput] = useState("");

  const addSkill = () => {
    setSkills([...skills, input]);
  };

  return (
    <div>
      <HStack spacing={4} wrap={"wrap"} align={"flex-end"}>
        <FormControl>
          <FormLabel>Add Skill</FormLabel>
          <Input
            placeholder="Skill"
            variant="filled"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />

          <Button colorScheme="blue" variant="solid" mt={4} onClick={addSkill}>
            Submit
          </Button>
        </FormControl>
      </HStack>

      <Box mt={4}>
        {skills.map((skill, index) => (
          <Tag
            size={"lg"}
            key={index}
            borderRadius="full"
            variant="solid"
            colorScheme="green"
            m={2}
          >
            <TagLabel>{skill}</TagLabel>
            <TagCloseButton />
          </Tag>
        ))}
      </Box>
    </div>
  );
};

export default Skills;
