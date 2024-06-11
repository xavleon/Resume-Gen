import { Button, Container, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import Builder from "./Builder";
import ResumePreview from "./ResumePreview";

const Main = () => {
  return (
    <Container w={"full"} maxW={"7xl"} py={12}>
      <Heading as="h4" size="xl" textAlign="center" mb={12}>
        Builder Dashboard
      </Heading>
      <Container maxW={"5xl"}>
        {/* Theme Select */}
        <Button
          colorScheme="blue"
          variant="solid"
          size="lg"
          mb={4}
          w={"full"}
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
