import FormBuilder from "@/components/FormBuilder";
import { Box, Button, Flex, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useEffect, useState } from "react";

const index = () => {
  const [fields, setFields] = useState();
  const [additionalFields, setAdditionalFields] = useState();
  const form = useForm();
  useEffect(() => {
    fetch("/api/input")
      .then((res) => res.json())
      .then((data) => {
        setFields(data);
      });
  }, []);
  const onSubmit = (data) => {
    fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setAdditionalFields(data));
  };
  return (
    <Box>
      <form onSubmit={form.onSubmit(onSubmit)}>
        <FormBuilder fields={fields} form={form} />
        {additionalFields ? <Text align="center">Additional Info</Text> : null}
        <FormBuilder fields={additionalFields} form={form} />
        <Flex justify="center">
          <Button type="submit">Submit</Button>
        </Flex>
      </form>
    </Box>
  );
};

export default index;
