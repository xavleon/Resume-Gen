import React from "react";
import { useRadio, Box } from "@chakra-ui/react";

const ThemeOption = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  return (
    <Box as="label">
      <input {...getInputProps()} />
      <Box
        {...getCheckboxProps()}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="50%"
        bg={props.value}
        boxShadow="md"
        _checked={{
          borderColor: "teal.600",
        }}
        px={5}
        py={5}
      ></Box>
    </Box>
  );
};

export default ThemeOption;
