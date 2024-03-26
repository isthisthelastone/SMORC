import React from "react";

interface FlexProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Flex: React.FC<FlexProps> = (props: FlexProps) => {
  const { children, className, onClick, id } = props;

  const flexClasses = `flex ${className || ""}`;

  return (
    <div id={id} className={flexClasses} onClick={onClick}>
      {children}
    </div>
  );
};
