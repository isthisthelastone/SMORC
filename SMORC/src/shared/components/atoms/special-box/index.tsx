import { Flex } from "@shared/components";
import styled from "@emotion/styled";
import { ReactNode } from "react";

interface SpecialBoxProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
  p?: number;
}

export const SpecialBox = (props: SpecialBoxProps) => {
  const { children, center, className } = props;

  const cl = center ? " justify-center items-center" : "";
  // Убедимся, что padding формируется правильно

  // Используем шаблонные строки с правильной конкатенацией и условной проверкой
  const classes = `${className || ""} ${cl}`.trim();

  return (
    <FlexWithBorder className={className}>
      <Flex className={classes}>{children}</Flex>
    </FlexWithBorder>
  );
};

const FlexWithBorder = styled(Flex)`
  position: relative;
  border-radius: 15px;
  background: radial-gradient(
    117.73% 149.5% at 8.37% 0%,
    rgba(69, 69, 121, 0.7) 0%,
    rgba(13, 13, 54, 0.85) 100%
  );
  padding: 1rem;
  z-index: 2;
  color: white;
  border: solid 1px #2563eb;
  background-clip: padding-box;
  box-shadow:
    0 4px 6px -1px rgba(39, 39, 78, 0.6),
    inset 0 0 10px rgba(255, 255, 255, 0.2); // Inner white glow

  &:before {
    content: "";
    position: absolute;
    top: -1px;
    right: -1px;
    bottom: -1px;
    left: -1px;
    border-radius: 16px; // Adjusted to match the border-radius + border width
    box-shadow: 0 0 15px rgba(255, 255, 255, 0.3); // Outer glow
    z-index: -1;
    background-clip: padding-box;
  }
`;
