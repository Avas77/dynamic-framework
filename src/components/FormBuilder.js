import React from "react";
import DynamicFramework from "./DynamicFramework";

const FormBuilder = ({ fields, form }) => {
  if (fields) {
    return fields?.map((field) => (
      <DynamicFramework fields={field} form={form} key={field.id} />
    ));
  }
};

export default FormBuilder;
