import { Box, Text, TextInput } from "@mantine/core";
import React from "react";

const Input = ({ meta, form }) => {
  return (
    <Box>
      <Text>{meta?.label}</Text>
      <TextInput {...form.getInputProps("name")} />
    </Box>
  );
};

export default Input;
