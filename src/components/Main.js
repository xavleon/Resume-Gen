import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Builder from "./Builder";
import ResumePreview from "./ResumePreview";
import ThemeSelect from "./Theme/ThemeSelect";

const Main = () => {
  return (
    <Container w={"full"} maxW={"7xl"} py={12}>
      <Heading as="h4" size="xl" textAlign="center" mb={12}>
        Builder Dashboard
      </Heading>
      <Container
        maxW={"5xl"}
        p={8}
        bg={"white"}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        flexDirection={{ base: "column", md: "row" }}
        boxShadow={"md"}
        borderRadius={8}
      >
        {/* Theme Select */}
        <ThemeSelect />
        <Button
          colorScheme="blue"
          variant="solid"
          mb={4}
          rightIcon={<MdOutlineFileDownload />}
        >
          Download
        </Button>
      </Container>

      {/* Resume Section */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={4}
        mt={12}
        mb={12}
        gap={4}
        alignItems={"flex-start"}
        justifyContent={"space-between"}
      >
        <Builder />
        <ResumePreview />
      </Stack>
    </Container>
  );
};

export default Main;
