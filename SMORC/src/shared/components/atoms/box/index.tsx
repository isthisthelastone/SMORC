import styled from "@emotion/styled";
import { ReactNode } from "react";
import { Flex } from "../flex";

interface BoxProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
  p?: number;
}

export const Box = (props: BoxProps) => {
  const { children, center, p = 1, className } = props;

  const cl = center ? " justify-center items-center" : "";
  // Убедимся, что padding формируется правильно
  const padding = `p-[${p}rem]`;

  // Используем шаблонные строки с правильной конкатенацией и условной проверкой
  const classes = `${padding} ${className || ""} ${cl}`.trim();

  return (
    <FlexWithBorder>
      <Flex className={classes}>{children}</Flex>
    </FlexWithBorder>
  );
};

const FlexWithBorder = styled(Flex)`
  border-radius: 15px;
  padding: 1px;
  background-image: linear-gradient(rgb(23, 23, 23), rgb(23, 23, 23)),
    linear-gradient(45deg, #787878, #8470ff, #787878);
  background-origin: border-box;
  background-clip: content-box, border-box;
  z-index: 5;
`;

export const BOX_COLOR = "rgb(23, 23, 23)";

/*
background-image: linear-gradient(black, black), linear-gradient(45deg, rgba(255, 255, 255, 0.06) 0%, #8470FF 50%, rgba(134, 92, 255, 0) 100%);
*/
