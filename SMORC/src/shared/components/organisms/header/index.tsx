import { Discord, Logo, Telegram, Twitter } from "@shared/assets";
import { Flex, Typography } from "@shared/components";

export const Header = () => {
  return (
    <Flex className={"justify-between pt-8 flex-1 h-10 max-h-20 px-[12.5%]"}>
      <Flex>
        <Logo />
      </Flex>
      <Flex className={"gap-5"}>
        <Typography className="text-sm font-normal">About us</Typography>
        <Typography className="text-sm font-normal">Who is SMORC?</Typography>
        <Typography className="text-sm font-normal">SMORCenomics</Typography>
        <Typography className="text-sm font-normal">Pre-Sale Stats</Typography>
        <Typography className="text-sm font-normal">Airdrop Checker</Typography>
      </Flex>
      <Flex className={"gap-5"}>
        <Twitter />
        <Discord />
        <Telegram />
      </Flex>
    </Flex>
  );
};
