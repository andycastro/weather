import React from "react";
import { Buttons } from "../../../styles/form.style";
import SearchIconSvg from "../../../assets/icons/loupe.svg";

const Button = () => {
  return (
    <>
      <Buttons>
        <img width="20" src={SearchIconSvg} alt="Search" />
      </Buttons>
    </>
  );
};

export default Button;
