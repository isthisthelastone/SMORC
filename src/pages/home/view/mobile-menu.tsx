import {
  Flex,
  GreyTransparentSocials,
  HugeWhiteSocials,
  Typography,
} from "@shared/components";
import { HomeMobileHeader } from "@pages/home/view/mobile.tsx";
import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";
import { Copyright } from "@shared/components/molecules/copyright";

interface MobileMenuProps {
  onClick: MouseEventHandler;
}

export const MobileMenu = ({ onClick }: MobileMenuProps) => (
  <>
    <Flex className={"flex-col justify-center"}>
      <HomeMobileHeader onClick={onClick} />
      <Flex
        className={
          "flex-col relative pt-[7.5rem] flex-1 justify-center  gap-[2rem]"
        }
      >
        <Typography
          className={"text-[1.25rem] font-[600] text-center"}
          onClick={onClick}
        >
          About Us
        </Typography>
        <Link to="/airdrop">
          <Typography className={"text-[1.25rem] font-[600] text-center"}>
            Airdrop Checker
          </Typography>
        </Link>
        <Flex className={"fixed left-[15%] flex-col bottom-[1rem] m-0"}>
          <HugeWhiteSocials className={"justify-center pt-[20rem] pb-[3rem]"} />
          <Copyright className={"text-center justify-center "} />
          <GreyTransparentSocials
            className={"text-center justify-center py-[2rem]"}
          />
        </Flex>
      </Flex>
    </Flex>
  </>
);
