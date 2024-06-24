import {
  Box,
  HStack,
  Heading,
  VStack,
  Text,
  Wrap,
  Tag,
  TagLabel,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import React from "react";

import { MdLocalPhone, MdLocationPin, MdMail } from "react-icons/md";

import { RxLinkedinLogo } from "react-icons/rx";
import { useSelector } from "react-redux";
const ResumePreview = ({ printElement }) => {
  const theme = useSelector((state) => state.theme);
  const about = useSelector((state) => state.about);
  const skills = useSelector((state) => state.skills);
  const projects = useSelector((state) => state.projects);

  console.log(about);
  return (
    <Box w={"full"} bg={"white"} minH={"100vh"} shadow={"md"}>
      <div ref={printElement}>
        {/* Picture + Intro */}
        <HStack>
          <img
            src={
              about.picture
                ? about.picture
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSooCX-nPSHN0kCVdUnm-eptCPvUF04YaxeHQ&s"
            }
            alt="User Avatar"
            width={"115px"}
            height={"115px"}
            style={{
              borderRadius: "50%",
            }}
          />

          <VStack>
            <Heading variant="h4" size="md">
              {about.name}
            </Heading>
            <Text ml={8}>{about.role}</Text>
          </VStack>
        </HStack>

        {/* Other Info */}
        <HStack
          bg={theme.color}
          spacing={4}
          wrap={"wrap"}
          align={"flex-start"}
          justify={"space-between"}
          p={4}
        >
          <HStack spacing={1}>
            <MdMail />
            <Text>{about.email}</Text>
          </HStack>

          <HStack spacing={1}>
            <MdLocalPhone />
            <Text>{about.phone}</Text>
          </HStack>

          <HStack spacing={1}>
            <MdLocationPin />
            <Text>{about.address}</Text>
          </HStack>

          <HStack spacing={1}>
            <RxLinkedinLogo />
            <Text>{about.linkedin}</Text>
          </HStack>
        </HStack>

        {/* Skills & Projects  */}
        <HStack
          w={"full"}
          h={"full"}
          my={2}
          mb={6}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          spacing={5}
          mt={4}
          p={4}
        >
          {/* Education */}
          <VStack alignItems={"flex-start"}>
            {/* Education */}
            <Heading variant="h4" size="md">
              Education
            </Heading>

            {/* List */}
            <VStack
              align={"flex-start"}
              spacing={2}
              borderBottom={"1px"}
              mb={4}
              pb={4}
            >
              <Text color="gray.500">BSc. Computer Science</Text>
              <Text color="gray.500">
                University of Engineering and Technology
              </Text>
              <Text color="gray.500">2016 - 2020</Text>
            </VStack>
            <VStack align={"flex-start"} spacing={2}>
              <Text color="gray.500">BSc. Computer Science</Text>
              <Text color="gray.500">
                University of Engineering and Technology
              </Text>
              <Text color="gray.500">2016 - 2020</Text>
            </VStack>
          </VStack>

          {/* Work Experience */}
          <VStack alignItems={"flex-start"}>
            <Heading variant="h4" size="md">
              Work Experience
            </Heading>

            {/* List */}
            <VStack
              align={"flex-start"}
              spacing={2}
              borderBottom={"1px"}
              mb={4}
              pb={4}
            >
              <Text color="gray.500">Senior Engineer</Text>
              <Text color="gray.500">Google, Mountain View, California</Text>
              <Text color="gray.500">2016 - 2020</Text>
              <Text color="gray.500">
                Worked on the Google Search Engine and improved the search
                algorithm
              </Text>
            </VStack>
            <VStack align={"flex-start"} spacing={2}>
              <Text color="gray.500">Senior Engineer</Text>
              <Text color="gray.500">Google, Mountain View, California</Text>
              <Text color="gray.500">2016 - 2020</Text>
              <Text color="gray.500">
                Worked on the Google Search Engine and improved the search
                algorithm
              </Text>
            </VStack>
          </VStack>
        </HStack>

        <HStack
          w={"full"}
          h={"full"}
          my={2}
          mb={6}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
          spacing={5}
          mt={4}
          p={4}
        >
          {/* Skills */}
          <VStack alignItems={"flex-start"} w={"40%"}>
            {/* Skills */}
            <Heading variant="h4" size="md">
              Skills
            </Heading>

            {/* List */}
            <Wrap>
              {skills.map((skill, index) => (
                <Tag
                  size={"md"}
                  borderRadius={"md"}
                  bg={theme.color}
                  variant={"solid"}
                >
                  <TagLabel>{skill.name}</TagLabel>
                </Tag>
              ))}
            </Wrap>
          </VStack>

          {/* Projects */}
          <VStack alignItems={"flex-start"}>
            <Heading variant="h4" size="md">
              Projects
            </Heading>

            {/* List */}
            {projects.map((project) => (
              <VStack
                align={"flex-start"}
                spacing={2}
                borderBottom={"1px"}
                mb={4}
                pb={4}
              >
                <HStack s>
                  <Text>{project.title}</Text>
                  <Text color="gray.500">
                    <a href={project.url}> Link</a>
                  </Text>
                </HStack>

                <UnorderedList pl={5}>
                  <ListItem>
                    <Text fontSize={"sm"} as="p">
                      {project.description}
                    </Text>
                  </ListItem>
                </UnorderedList>
              </VStack>
            ))}
          </VStack>
        </HStack>
      </div>
    </Box>
  );
};

export default ResumePreview;
