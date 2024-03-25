import React, { forwardRef } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  color?: string;
}

// Используем forwardRef для передачи ref в компонент
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (props, ref) => {
    const { value } = props;

    return <Area ref={ref} {...props} value={value} />;
  },
);

Textarea.displayName = "Textarea";

const Area = styled.textarea<TextareaProps>(
  ({ color = "#080808" }) => css`
    background-color: ${color};
    resize: none;
    overflow: hidden;
    pointer-events: none;
  `,
);
