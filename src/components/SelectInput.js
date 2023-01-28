import { Select } from "@mantine/core";
import React from "react";

const SelectInput = ({ meta, form }) => {
  return (
    <Select
      label={meta?.label}
      placeholder="Pick one"
      data={meta?.options}
      {...form.getInputProps("travelChoice")}
    />
  );
};

export default SelectInput;
