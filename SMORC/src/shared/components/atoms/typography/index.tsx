import { css } from "@emotion/react";
import styled from "@emotion/styled";

type TypographyProps = {
  children: React.ReactNode;
  className?: string;
  special?: boolean;
};

export const Typography: React.FC<TypographyProps> = (
  props: TypographyProps,
) => {
  const { className, children, special } = props;

  return (
    <Paragraph special={special} className={`font-sans ${className ?? ""}`}>
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
