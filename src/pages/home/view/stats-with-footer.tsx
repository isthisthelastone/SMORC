import { Box, Flex, Typography } from "@shared/components";
import { ColorfulSolana, ScrollBack, SmorcWifFamily } from "@shared/assets";
import { ReactNode, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { nanoid } from "nanoid";
import {
  GreyTransparentSocials,
  HugeWhiteSocials,
} from "@shared/components/molecules";
import { css } from "@emotion/react";
import { Copyright } from "@shared/components/molecules/copyright";
import { useUnit } from "effector-react";
import { homeModel } from "../model";

const { $userData } = homeModel;

interface StatsWithFooterProps {
  className?: string;
}
export const StatsWithFooter = ({ className }: StatsWithFooterProps) => {
  return (
    <Flex className={`${className ?? ""} flex-col  gap-[2rem]`}>
      <PreSale />
      <ContributersTable />
      <HomeFooter />
    </Flex>
  );
};

const PreSale = () => {
  const [totalSol, setTotalSol] = useState<null | number>(null);
  const [solPrice, setSolPrice] = useState<null | number>(null);

  const fetchSolPrice = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd",
      );

      const data = await response.json();

      setSolPrice(data?.solana.usd);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };
  const fetchSol = async () => {
    try {
      const response = await fetch("https://api.smorc.io/stats");

      const data = await response.json();

      setTotalSol(data.allAmount);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  };
  useEffect(() => {
    fetchSol();
    fetchSolPrice();
  }, []);

  return (
    <Flex
      id="Pre-sale"
      className={"flex-col pt-[10rem] justify-center gap-[2rem]"}
    >
      <Typography className={"font-[700] text-center text-[56px]"}>
        Pre-sale Stats
      </Typography>
      <Flex
        className={
          "flex-col font-[500] flex-1 gap-[0.75rem] justify-center text-center text-[18px]"
        }
      >
        <Typography special>Total Raised</Typography>
        <Flex className={"justify-center"}>
          <Box className={"pl-[3rem] w-[20rem] p-[0.5rem]"}>
            <Flex className={"gap-[0.75rem] align-middle"}>
              <Typography className={"text-[20px] font-[500]"}>
                {totalSol?.toFixed(2)}
              </Typography>
              <ColorfulSolana className={"mt-[0.5rem]"} />
              <Typography className={"text-[20px] font-[500]"}>
                {totalSol && solPrice ? (totalSol * solPrice).toFixed(2) : "$"}$
              </Typography>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export const ContributersTable = () => {
  return (
    <Flex className={"flex-col gap-[4rem] justify-center"}>
      <Typography className={"text-[36px] font-[600] text-center"}>
        Top contributors
      </Typography>
      <Box className={"flex-1 p-[3rem]"}>
        <TopContributersTable />
      </Box>
    </Flex>
  );
};

export interface UserData {
  wallet: string;
  lamports: number;
  allAmount: number;
  count: number;
  rank: number;
  signHolder: number;
}

const ITEMS_PER_PAGE = 10;

export const calculateStringData = (number: number) => {
  switch (number) {
    case 1:
      return "🥇 1";
    case 2:
      return "🥈 2";
    case 3:
      return "🥉 3";
    default:
      return `# ${number}`;
  }
};

export const TopContributersTable = () => {
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
        <td className="p-[2rem]">
          <Typography className="font-[500] text-[16px]">
            {calculateStringData(contributorRank)}
          </Typography>
        </td>
        <td>
          <Typography className="text-[16px] font-[500]">
            {user.wallet}
          </Typography>
        </td>
        <td>
          <RowContent>{user.allAmount.toFixed(2)} SOL</RowContent>
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
              <Typography className="text-[20px] font-[600] text-left pb-[1rem] pl-[1rem]">
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

interface HeaderTitleProps {
  children: ReactNode;
}

export const HeaderTitle = ({ children }: HeaderTitleProps) => (
  <Typography className="text-[1rem] font-[500]  pb-[1rem] text-center ">
    {children}
  </Typography>
);

export const TableRow = styled.tr`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const RowContent = ({ children }: HeaderTitleProps) => (
  <Typography className="font-[500]   text-[16px] text-center">
    {children}
  </Typography>
);

const HomeFooter = () => {
  return (
    <HomeFooterWrapper
      url={SmorcWifFamily}
      className={"flex-col justify-center text-center pt-[5rem] gap-[5rem]"}
    >
      <Typography className={"font-[700] text-[56px] text-center"}>
        Join us
      </Typography>
      <HugeWhiteSocials className={"justify-center"} />
      <Flex className={"justify-between flex-1 mb-[1rem]"}>
        <Copyright />
        <Flex className={"gap-[2rem]"}>
          <GreyTransparentSocials />
          <ScrollBack
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={"mb-[1rem] cursor-pointer hover:opacity-70"}
          />
        </Flex>
      </Flex>
    </HomeFooterWrapper>
  );
};

interface HomeFooterWrapperProps {
  url: string;
}
export const HomeFooterWrapper = styled(Flex)<HomeFooterWrapperProps>(
  ({ url }) => css`
    background-image: url("${url}");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    position: relative;
  `,
);

/*
const generateMockUser = (): UserData => ({
  wallet: nanoid(), // В реальном примере здесь должна быть уникальная генерация
  rank: Math.floor(Math.random() * 20) + 1,
  solanaSpent: (Math.random() * 99).toFixed(2),
});

const USER_DATA_MOCK: UserData[] = Array.from({ length: 20 }, generateMockUser);

/*
  const renderBody = USER_DATA_MOCK.sort((us1, us2) => us1.rank - us2.rank).map(
    (user, index) => (
      <tr key={index}>
        <td>{user.rank}</td>
        <td>{user.wallet}</td>
        <td>{user.solanaSpent}</td>
      </tr>
    ),
  );

 */
