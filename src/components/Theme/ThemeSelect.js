import React from "react";
import { HStack, useRadioGroup } from "@chakra-ui/react";
import ThemeOption from "./ThemeOption";

const ThemeSelect = () => {
  const options = [
    "purple.400",
    "blue.400",
    "green.400",
    "red.400",
    "yellow.400",
    "pink.400",
    "cyan.400",
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "color",
    value: "blue",
    onChange: (value) => console.log(value),
  });

  return (
    <HStack {...getRootProps()} spacing={4}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        // console.log(radio);

        return <ThemeOption key={value} {...radio} />;
      })}
    </HStack>
  );
};

export default ThemeSelect;
