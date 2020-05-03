import React from "react";
import { Inputs } from "../../../styles/form.style";

const Input = (props: any) => {
  const { setFormData } = props;

  return (
    <>
      <Inputs
        type="text"
        name="text"
        placeholder="Search by location"
        onChange={(e) => {
          const { value } = e.target;
          setFormData((prev: any) => ({
            ...prev,
            searchValue: value || "",
          }));
        }}
      />
    </>
  );
};

export default Input;
