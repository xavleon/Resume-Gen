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
import { useDispatch, useSelector } from "react-redux";

import { addSkill } from "../../store/skillsSlice";

const Skills = () => {
  const skills = useSelector((state) => state.skills);

  console.log(skills);

  const dispatch = useDispatch();

  const [input, setInput] = useState("");

  const handleaddSkill = (e) => {
    dispatch(
      addSkill({
        id: skills.length + 1,
        name: input,
      })
    );
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

          <Button
            colorScheme="blue"
            variant="solid"
            mt={4}
            onClick={handleaddSkill}
          >
            Submit
          </Button>
        </FormControl>
      </HStack>

      <Box mt={4}>
        {skills &&
          skills.map((skill, index) => (
            <Tag
              size={"lg"}
              key={index}
              borderRadius="full"
              variant="solid"
              colorScheme="green"
              m={2}
            >
              <TagLabel>{skill.name}</TagLabel>
              <TagCloseButton />
            </Tag>
          ))}
      </Box>
    </div>
  );
};

export default Skills;
