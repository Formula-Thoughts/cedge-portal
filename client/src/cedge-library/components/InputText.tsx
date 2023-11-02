import React, { ChangeEvent, useState } from "react";
import styled from "styled-components";
import { device } from "../util/mediaQueries";

const Input = styled.input`
  padding: 1.5rem;
  border-radius: 0.7rem;
  font-size: ${(props) => props.theme.fonts.types.medium.size};

  @media ${device.tablet} {
    padding: 1.1rem;
  }
`;

interface CustomInputProps {
  value?: string;
  onChange?: (value: string) => void;
  type?: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  id?: string;
}

const InputText: React.FC<CustomInputProps> = ({
  placeholder,
  value,
  onChange,
  type,
  name,
  required,
  style,
  id,
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <Input
      type={type ?? "text"}
      id={id}
      required={required ?? false}
      name={name}
      placeholder={placeholder}
      value={value}
      style={style}
      onChange={handleInputChange}
    />
  );
};

export default InputText;
