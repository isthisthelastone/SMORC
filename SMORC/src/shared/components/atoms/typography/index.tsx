import { css } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  special?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const Typography: React.FC<TypographyProps> = (
  props: TypographyProps,
) => {
  const { className, children, special, onClick } = props;

  return (
    <Paragraph
      onClick={onClick}
      special={special}
      className={`font-sans ${className ?? ""}`}
    >
      {children}
    </Paragraph>
  );
};

interface ParagraphProps {
  special?: boolean;
}

export const ADDITIONAL_COLOR = "rgba(163, 163, 163, 1)";

const Paragraph = styled.p<ParagraphProps>(
  ({ special }) => css`
    ${special && `color: ${ADDITIONAL_COLOR};`}
  `,
);
