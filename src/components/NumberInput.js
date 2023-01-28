import { Box, NumberInput, Text } from "@mantine/core";
import React from "react";

const FloatingInput = ({ meta, form }) => {
  return (
    <Box>
      <Text>{meta?.label}</Text>
      <NumberInput {...form.getInputProps("age")} />
    </Box>
  );
};

export default FloatingInput;
