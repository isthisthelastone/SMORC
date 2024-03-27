import { Flex } from "@shared/components";

import { ClocksWithTitle, CountdownSocials, Footer } from "@pages/countdown";
import { Copyright } from "@shared/components/molecules/copyright";
import { GreyTransparentSocials } from "@shared/components/molecules";

export const MobileCountdown = () => (
  <Flex className={"flex-col"}>
    <ClocksWithTitle isMobile />
    <CountdownSocials className={"scale-75 pt-[3rem]"} />
    <Flex className="flex-1 flex-col justify-center text-center gap-[2rem] pt-[27.5rem] pb-[2rem]">
      <Copyright className="justify-center text-center" />
      <GreyTransparentSocials className="justify-center text-center " />
    </Flex>
  </Flex>
);
