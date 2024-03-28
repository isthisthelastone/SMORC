import { Box, Flex, Typography } from "@shared/components";
import {
  Solana,
  WalletContract,
} from "@pages/home/view/header-with-wallet.tsx";
import { LiquidityPool, Logo, ShowMoreIcon, SupplyIcon } from "@shared/assets";
import { SmorcTheOrc } from "@pages/home/view/intro-with-economics.tsx";
import styled from "@emotion/styled";
import { StatsWithFooter } from "@pages/home/view/stats-with-footer.tsx";
export const HomeMobile = () => (
  <Flex className={"flex-col"}>
    <HomeMobileHeader />
    <Flex className={"flex-col flex-1 mt-[-12rem]"}>
      <WalletContract
        className={" justify-center items-center text-center scale-50"}
        mobile
      />
      <Typography
        className={"font-[700] text-[2.25rem] mt-[-12rem] text-center"}
      >
        Who is
      </Typography>
      <Typography className={"font-[700] text-[2.25rem] text-center "}>
        SMORC?
      </Typography>
      <SmorcTheOrc mobile className={" justify-center pt-[1rem]"} />
      <EconomicsMobile />
    </Flex>
    <StatsWithFooter className={"scale-75"} />
  </Flex>
);

const HomeMobileHeader = () => (
  <Flex className={"justify-between "}>
    <Logo className={"mt-[2rem]"} />
    <ShowMoreIcon className={"mt-[1.5rem]"} />
  </Flex>
);

const EconomicsMobile = () => {
  return (
    <Flex className={"flex-col pt-[2rem] gap-[1rem]"}>
      <Typography className={"font-[700] text-[2.25rem] text-center "}>
        SMORCenomics
      </Typography>
      <Box className={"flex-col"}>
        <EconomicsContainerWithBorder
          className={"pb-[0.25rem] align-middle gap-[0.25rem]"}
        >
          <LiquidityPool className={" mt-[-1rem] scale-75"} />
          <Flex className={"flex-col align-middle flex-1"}>
            <Typography className="text-[1rem]  font-[400]">
              Liquidity Pool
            </Typography>
            <Typography className="text-[1.125rem]  font-[600]">
              LP Burned at launch
            </Typography>
          </Flex>
        </EconomicsContainerWithBorder>
        <Flex className={"gap-[0.5rem]"}>
          <SupplyIcon className={"scale-75"} />
          <Flex className={"flex-col align-middle pt-[1rem] flex-1"}>
            <Typography className="text-[1rem]  font-[400]">
              Total Supply:
            </Typography>
            <Typography className="text-[1.125rem]  font-[600]">
              21,536,720,090.44
            </Typography>
          </Flex>
          <Solana className={"pt-[3.25rem] text-[0.5rem]"}>$SMORC</Solana>
        </Flex>
      </Box>
    </Flex>
  );
};

export const TableMobile = () => {};
const EconomicsContainerWithBorder = styled(Flex)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;
