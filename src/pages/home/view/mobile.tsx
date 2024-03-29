import {
  Box,
  Flex,
  GreyTransparentSocials,
  HugeWhiteSocials,
  Show,
  Typography,
} from "@shared/components";
import {
  Solana,
  WalletContract,
} from "@pages/home/view/header-with-wallet.tsx";
import { LiquidityPool, Logo, ShowMoreIcon, SupplyIcon } from "@shared/assets";
import { SmorcTheOrc } from "@pages/home/view/intro-with-economics.tsx";
import styled from "@emotion/styled";
import {
  calculateStringData,
  HeaderTitle,
  TableRow,
} from "@pages/home/view/stats-with-footer.tsx";
import { MouseEventHandler, ReactNode, useCallback, useState } from "react";
import { useUnit } from "effector-react";
import { nanoid } from "nanoid";
import { homeModel } from "../model";
import { Copyright } from "@shared/components/molecules/copyright";
import { MobileMenu } from "./mobile-menu.tsx";

const { $userData } = homeModel;
export const HomeMobile = () => {
  const [mode, setMode] = useState<"menu" | "home">("home");

  const sendSetMode = useCallback(() => setMode("home"), [mode]);

  return (
    <>
      <Show when={mode === "menu"}>
        <MobileMenu onClick={sendSetMode} />
      </Show>
      <Show when={mode === "home"}>
        <Flex className={"flex-col pt-[5rem] "}>
          <HomeMobileHeader onClick={() => setMode("menu")} />
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
          <Typography
            className={"font-[700] text-[2.25rem] text-center py-[2rem]"}
          >
            Pre-sale Stats
          </Typography>
          <Box className={"flex-1 p-[1rem] "}>
            <TableMobile />
          </Box>
          <Typography
            className={"font-[700] text-[2.25rem] text-center py-[3rem]"}
          >
            Join Us
          </Typography>
          <HugeWhiteSocials className={"justify-center pb-[3rem]"} />
          <Copyright className={"text-center justify-center "} />
          <GreyTransparentSocials
            className={"text-center justify-center py-[2rem]"}
          />
        </Flex>
      </Show>
    </>
  );
};

interface HomeMobileHeader {
  onClick: MouseEventHandler;
}

export const HomeMobileHeader = ({ onClick }: HomeMobileHeader) => (
  <Flex
    className={"justify-between flex-1  absolute width-[100%] top-0 left-10"}
  >
    <Logo className={"mt-[2rem]"} />
    <Flex className=" width-[100%]" onClick={onClick}>
      <ShowMoreIcon className={"mt-[1.5rem] ml-[55vw] right-30"} />
    </Flex>
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

export const TableMobile = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const userData = useUnit($userData);

  if (!userData) return null;

  const lastItemIndex = currentPage * ITEMS_PER_PAGE;
  const firstItemIndex = lastItemIndex - ITEMS_PER_PAGE;
  const currentItems = userData.slice(firstItemIndex, lastItemIndex);

  const renderBody = currentItems.map((user, index) => {
    const contributorRank = index + 1 + (currentPage - 1) * ITEMS_PER_PAGE;

    return (
      <TableRow key={user.wallet}>
        <td className="p-[1rem]">
          <Typography className="font-[700] text-[0.875rem]">
            {calculateStringData(contributorRank)}
          </Typography>
        </td>
        <td>
          <Typography className="text-[0.875rem] font-[500] truncate overflow-hidden ">
            {user.wallet}
          </Typography>
        </td>
        <td>
          <MobileRowContent>{user.allAmount.toFixed(2)} SOL</MobileRowContent>
        </td>
      </TableRow>
    );
  });

  const totalPages = Math.ceil(userData.length / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  interface PageButtonProps {
    number: number;
  }
  const PageButton = ({ number }: PageButtonProps) => (
    <button
      key={number + 1}
      onClick={() => handlePageChange(number + 1)}
      className={`px-[0.5rem]`}
    >
      {number + 1}
    </button>
  );

  // Простой компонент для отображения пагинации
  const Pagination = () => (
    <Flex className="justify-center gap-[2rem] space-x-2 mt-4">
      {[...Array(totalPages).keys()].map((number) =>
        currentPage === number + 1 ? (
          <Box key={nanoid()}>
            <PageButton number={number} />
          </Box>
        ) : (
          <PageButton key={nanoid()} number={number} />
        ),
      )}
    </Flex>
  );

  return (
    <div>
      <table className={"w-[100%] table-fixed border-spacing-[0rem_2rem]"}>
        <thead>
          <TableRow>
            <th className="w-1/4">
              <Typography className="text-[1rem] font-[500] text-left pb-[1rem] pl-[1rem]">
                Rank
              </Typography>
            </th>
            <th className="w-5/12">
              <HeaderTitle>Wallet</HeaderTitle>
            </th>
            <th className="w-1/3">
              <HeaderTitle>Total</HeaderTitle>
            </th>
          </TableRow>
        </thead>
        <tbody>{renderBody}</tbody>
      </table>
      <Pagination />
    </div>
  );
};

const EconomicsContainerWithBorder = styled(Flex)`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const ITEMS_PER_PAGE = 5;

interface MobileRowContentProps {
  children: ReactNode;
}

export const MobileRowContent = ({ children }: MobileRowContentProps) => (
  <Typography className="text-[0.875rem] font-[500]  text-center">
    {children}
  </Typography>
);
