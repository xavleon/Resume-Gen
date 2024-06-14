import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import ImageUpload from "../ImageUpload/ImageUpload";

const About = () => {
  const [image, setImage] = useState(null);

  return (
    <div>
      <Stack spacing={4}>
        {!image ? (
          <ImageUpload setImage={setImage} />
        ) : (
          <>
            <img
              src={image}
              alt="profile"
              width={200}
              height={200}
              style={{ borderRadius: "50%" }}
            />

            <Button
              colorScheme="red"
              variant="solid"
              onClick={() => setImage(null)}
            >
              Remove Image
            </Button>
          </>
        )}

        <HStack spacing={6}>
          <FormControl isRequired>
            <FormLabel>Full Name</FormLabel>

            <Input
              type="text"
              name="name"
              placeholder="Full Name"
              variant="filled"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Role</FormLabel>

            <Input
              type="text"
              name="role"
              placeholder="Role"
              variant="filled"
            />
          </FormControl>
        </HStack>

        <HStack spacing={6}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>

            <Input
              type="text"
              name="email"
              placeholder="Email"
              variant="filled"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>Phone</FormLabel>

            <Input
              type="tel"
              name="phone"
              placeholder="Phone"
              variant="filled"
            />
          </FormControl>
        </HStack>

        <HStack spacing={6}>
          <FormControl isRequired>
            <FormLabel>Address</FormLabel>

            <Input
              type="text"
              name="address"
              placeholder="Address"
              variant="filled"
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel>LinkedIn</FormLabel>

            <Input
              type="url"
              name="linkedin"
              placeholder="https://www.linkedin.com/"
              variant="filled"
            />
          </FormControl>
        </HStack>
      </Stack>
    </div>
  );
};

export default About;
