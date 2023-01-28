import { Radio } from "@mantine/core";

const CheckboxInput = ({ meta, form }) => {
  return (
    <Radio.Group
      label={meta?.label}
      withAsterisk
      {...form.getInputProps("driver")}
    >
      <Radio value="yes" label="Yes" />
      <Radio value="no" label="No" />
    </Radio.Group>
  );
};

export default CheckboxInput;
