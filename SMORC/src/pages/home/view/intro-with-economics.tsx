import {
  BlueArc,
  GreenArc,
  LiquidityPool,
  LiquidityPoolMiniDiagram,
  MarketingMiniDiagram,
  OrcInShirt,
  PresaleMiniDiagram,
  PurpleArc,
  SupplyIcon,
} from "@shared/assets";
import { Box, Flex, Typography } from "@shared/components";
import { Solana, WhoIsSmorc } from "./header-with-wallet.tsx";

import { ReactNode } from "react";
import { Tooltip } from "@shared/components/molecules";

export const IntroWithEconomics = () => {
  return (
    <Flex className={"flex-col"}>
      <WhoIsSmorc />
      <SmorcTheOrc />
      <SMORCenomics />
    </Flex>
  );
};

export const SmorcTheOrc = () => {
  return (
    <Flex className={"pr-[6.5%] max-h-[50vh]"}>
      <Box className="flex-1 gap-[10rem] pt-[2.5rem]" p={0}>
        <Flex className={"flex-col width-[25rem] gap-[1rem] pl-[1.5rem]"}>
          <Typography className={"text-[36px] font-[600]"}>
            SMORC, the ORC
          </Typography>
          <Typography
            className={"text-[16px] font-[400] max-h-[50vh] overflow-hidden"}
          >
            In the digital realm of Solana, there lived SMORC, a curious
            character unlike any other blockchain entity. One day, it stumbled
            upon a glitch and embarked on a journey to uncover its secrets.
            Along the way, SMORC encountered various digital wonders and
            eventually unearthed a treasure trove of artifacts hidden within the
            blockchain.
          </Typography>
          <Typography
            className={"text-[16px] font-[400] max-h-[50vh] overflow-hidden"}
          >
            Excited by its discovery, SMORC shared it with the <b>Solana </b>
            community, sparking a frenzy of activity. Through collaboration and
            camaraderie, they celebrated not just the treasure, but the bonds
            they forged. And so, SMORC continued its adventures, exploring new
            frontiers and uniting the blockchain community one discovery at a
            time.
          </Typography>
        </Flex>
        <img src={OrcInShirt} alt="Orc in Shirt" />
      </Box>
    </Flex>
  );
};

export const SMORCenomics = () => {
  return (
    <Flex className={" pt-[5rem] gap-[4rem] flex-col"} id={"Smorcenomics"}>
      <Typography className="text-[56px] font-[700]">SMORCenomics</Typography>
      <Flex className=" gap-[4rem]">
        <Flex className="flex-col gap-[4rem]">
          <Flex className=" gap-[1.5rem]">
            <Box className="flex-col justify-center min-w-[16rem] gap-[0.5rem]">
              <Flex className="justify-center">
                <SupplyIcon />
              </Flex>
              <Typography className="pl-[4rem] pt-[0.5rem]text-[18px]  font-[400]">
                Total Supply:
              </Typography>
              <Typography className="pl-[3rem] pt-[0.5rem]text-[20px] font-[700]">
                20,000,000,000
              </Typography>
              <Solana className=" pl-[5rem] pt-[0.5rem]text-[15px] font-[500]">
                $SMORC
              </Solana>
            </Box>
            <Box className="flex-col justify-center min-w-[16rem]">
              <Flex className="justify-center">
                <LiquidityPool />
              </Flex>
              <Typography className="pl-[3.5rem] pt-[1rem] text-[18px]  font-[400]">
                Liquidity Pool
              </Typography>
              <Typography className="pl-[3.75rem] pt-[0.5rem] text-[20px] font-[700]">
                LP Burned
              </Typography>
              <Typography className="pl-[4rem] text-[20px] font-[700]">
                at launch
              </Typography>
            </Box>
          </Flex>
          <Flex className="gap-[4rem]">
            <CircleGram
              title={"Pre-sale"}
              percentage={"48%"}
              icon={<PresaleMiniDiagram />}
            />
            <CircleGram
              title={"Liquidity Pool"}
              percentage={"48%"}
              icon={<LiquidityPoolMiniDiagram />}
            />
            <CircleGram
              title={"Marketing/Exchange"}
              percentage={"4%"}
              icon={<MarketingMiniDiagram />}
              spec
            />
          </Flex>
        </Flex>
        <BigCircle />
      </Flex>
    </Flex>
  );
};

interface CircleGramProps {
  icon: ReactNode;
  title: string;
  percentage: string;
  spec?: boolean;
}
export const CircleGram = (props: CircleGramProps) => {
  const { icon, title, percentage, spec } = props;

  return (
    <Flex className="flex-col justify-center gap-[0.5rem]">
      <Typography className={"pb-[0.5rem] text-center font-[500] text-[16px]"}>
        {title}
      </Typography>
      {spec ? <Flex className={"pl-[1.5rem]"}>{icon}</Flex> : icon}
      <Typography className={"text-center font-[600] text-[20px]"}>
        {percentage}
      </Typography>
    </Flex>
  );
};

export const BigCircle = () => {
  return (
    <Flex className={"flex-col cursor-pointer "}>
      <Tooltip content="Pre-sale – 48 %">
        <BlueArc className={"hover:-translate-y-1.5 transition-transform"} />
      </Tooltip>
      <Flex className={"mt-[-0.5rem]"}>
        <Tooltip content="Liquidity Pool – 48 %">
          <PurpleArc
            className={
              "z-10 cursor-pointer hover:-translate-y-0.5 transition-transform"
            }
          />
        </Tooltip>
        <Tooltip content="Marketing/Exchange – 4%">
          <GreenArc
            className={
              "ml-[-14.39rem] mt-[-0.4rem] z-0 cursor-pointer hover:translate-x-1 transition-transform "
            }
          />
        </Tooltip>
      </Flex>
    </Flex>
  );
};
