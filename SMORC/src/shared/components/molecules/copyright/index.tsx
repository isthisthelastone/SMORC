import { Flex, Typography } from "@shared/components";

export interface CopyrightProps {
  className?: string;
}
export const Copyright = ({ className }: CopyrightProps) => {
  return (
    <Flex className={className}>
      <Typography className={"text-[14px] font-[400]"}>
        Copyright 2024,
      </Typography>
      <Typography className={"text-[14px] font-[500]"}>SMORC</Typography>
    </Flex>
  );
};
