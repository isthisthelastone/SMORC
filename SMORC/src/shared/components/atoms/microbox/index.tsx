import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Flex } from "../flex";

interface BoxProps {
  children: ReactNode;
  className?: string;
  p?: number;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const MicroBox = (props: BoxProps) => {
  const { children, p = 1, className, onClick } = props;

  // Убедимся, что padding формируется правильно
  const padding = `p-[${p}rem]`;

  // Используем шаблонные строки с правильной конкатенацией и условной проверкой
  const classes = `${padding} ${className || ""}`.trim();

  return (
    <FlexWithBorder onClick={onClick}>
      <Flex className={classes}>{children}</Flex>
    </FlexWithBorder>
  );
};

export const ADDITIONAL_MICROBOX = "rgba(64, 64, 64, 1)";

const FlexWithBorder = styled(Flex)`
  border: double 1px transparent;
  border-radius: 5px;
  background-color: ${ADDITIONAL_MICROBOX};
`;
