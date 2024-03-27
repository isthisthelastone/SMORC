import { ReactNode, useRef, useState } from "react";
import { useTooltip, useTooltipTrigger } from "@react-aria/tooltip";
import { useTooltipTriggerState } from "@react-stately/tooltip";
import { FocusScope } from "@react-aria/focus";
import styled from "@emotion/styled";
import { Typography } from "@shared/components";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
}

export const Tooltip = ({ children, content }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const state = useTooltipTriggerState({ isOpen });
  const triggerRef = useRef(null);

  const { triggerProps, tooltipProps } = useTooltipTrigger(
    {},
    state,
    triggerRef,
  );

  const { tooltipProps: ariaTooltipProps } = useTooltip(tooltipProps, state);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <div
        {...triggerProps}
        ref={triggerRef}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {children}
      </div>
      {isOpen && (
        <FocusScope contain restoreFocus autoFocus>
          <ContentWrapper
            {...ariaTooltipProps}
            className={"p-[0.25rem] px-[1rem] "}
          >
            <Typography className="text-[20px] font-[400]">
              {content}
            </Typography>
          </ContentWrapper>
        </FocusScope>
      )}
    </div>
  );
};

const ContentWrapper = styled.div`
  border-radius: 5px;
  border-style: solid;
  background: rgba(69, 71, 73, 0.25);
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  zindex: 100;
`;
