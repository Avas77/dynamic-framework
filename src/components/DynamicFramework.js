import { Box } from "@mantine/core";
import React, { createElement } from "react";
import { FieldFactory } from "./FieldFactory";

const DynamicFramework = ({ fields, form }) => {
  const component = FieldFactory[fields?.inputType] || "New";
  return (
    <Box w={500} m="auto" my={50}>
      {createElement(component, {
        meta: {
          label: fields?.label,
          options: fields?.options,
        },
        form,
      })}
    </Box>
  );
};

export default DynamicFramework;
