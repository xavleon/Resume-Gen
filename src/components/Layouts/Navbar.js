import React from "react";
import { Stack, Flex, Image, HStack, Button, Text } from "@chakra-ui/react";
import logo from "../../assests/logo.png";

const Navbar = () => {
  return (
    <Stack bg={"gray.50"} px={10}>
      <Flex w="full" alignItems={"center"}>
        <Image
          src={logo}
          alt="Dan Abramov"
          boxSize="200px"
          objectFit="cover"
          borderRadius="full"
        />

        {/* Links */}
        <HStack spacing={10} ml={"auto"} as="nav">
          <Text as="a" href="#" fontSize="lg">
            Home
          </Text>
          <Text as="a" href="#" fontSize="lg">
            About
          </Text>
          <Text as="a" href="#" fontSize="lg">
            Templates
          </Text>
          <Button colorScheme="blue" variant="solid">
            Contact
          </Button>
        </HStack>
      </Flex>
    </Stack>
  );
};

export default Navbar;
