import React from "react";

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Flex: React.FC<FlexProps> = (props: FlexProps) => {
  const { children, className, onClick } = props;

  const flexClasses = `flex ${className || ""}`;

  return (
    <div className={flexClasses} onClick={onClick}>
      {children}
    </div>
  );
};
