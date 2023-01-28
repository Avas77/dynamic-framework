import CheckboxInput from "./CheckboxInput";
import FloatingInput from "./NumberInput";
import SelectInput from "./SelectInput";
import Input from "./TextInput";

export const FieldFactory = {
  TEXT: Input,
  NUMBER: FloatingInput,
  CHECKBOX: CheckboxInput,
  SELECT: SelectInput,
};
