import React from "react";

interface ShowComponentProps {
  when: boolean;
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

export const Show: React.FC<ShowComponentProps> = ({
  when,
  children,
  fallback = null,
}) => {
  return <>{when ? children : fallback}</>;
};
