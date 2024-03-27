import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color?: string;
}

// Используем forwardRef для передачи ref в компонент
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { value } = props;

  return <StyledInput ref={ref} {...props} value={value} />;
});

Input.displayName = "Input";

const StyledInput = styled.input<InputProps>(
  ({ color = "#080808" }) => css`
    background-color: ${color};
    resize: none;
    overflow: hidden;
    outline: white;
  `,
);
