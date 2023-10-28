import React from "react";
import styled from "styled-components";

const Primary = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text};
  padding: 1.5rem;
  border-radius: 0.7rem;
  font-size: ${(props) => props.theme.fonts.types.medium.size};

  &:hover {
    background: ${(props) => props.theme.colors.primaryDark};
  }
`;

interface ButtonProps {
  label: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, style }) => {
  return (
    <Primary style={style} onClick={onClick}>
      {label}
    </Primary>
  );
};

export default Button;
