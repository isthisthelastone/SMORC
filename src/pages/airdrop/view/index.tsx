import {
  ADDITIONAL_MICROBOX,
  Box,
  Flex,
  Header,
  Input,
  MicroBox,
  NavText,
  Typography,
} from "@shared/components";
import { EffectsWrapper } from "@pages/home";
import {
  AirdropBackground,
  OrcWifMoney,
  SearchIcon,
  SmokingOrc,
  SolanaGrey,
} from "@shared/assets";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useUnit } from "effector-react";
import { airdropModel } from "../model";
import styled from "@emotion/styled";

const { setInputValue, $inputValue, walletDataRequested } = airdropModel;

export const Airdrop = () => {
  const handleAirdropClick = () => window.location.reload();
  return (
    <EffectsWrapper className={"flex-col px-[12.5%]"} url={AirdropBackground}>
      <Header>
        <Link to="/">
          <NavText>Home Page</NavText>
        </Link>
        <NavText onClick={handleAirdropClick}>Airdrop Checker</NavText>
      </Header>
      <CheckAllocation />
    </EffectsWrapper>
  );
};

const CheckAllocation = () => {
  const [value, onChange, onSearchClick] = useUnit([
    $inputValue,
    setInputValue,
    walletDataRequested,
  ]);

  const [displayMode, setDisplayMode] = useState<"search" | "data">("search");

  const ref = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e?.target?.value);
  };

  const handleSearchClick = () => onSearchClick();

  return (
    <Flex className={"flex-col pt-[4rem] items-center justify-center"}>
      <Flex className={"w-[26.25rem] h-[25rem]  justify-center items-center"}>
        <img src={OrcWifMoney} alt="Orc Wif Money" />
      </Flex>
      <Box p={0} className={"flex-1 p-[0] mt-[-1.5rem] "}>
        <Flex
          className={" pt-[3rem] px-[4rem] pb-[3rem] flex-col gap-[2.5rem]"}
        >
          <Typography className={"font-[700] text-[2.25rem]"}>
            Check your $SMORC allocation
          </Typography>
          <Flex className={"flex-col gap-[0.5rem]"}>
            <label>
              <Typography
                className={"text-[1.25rem] text-center font-[400]"}
                special
              >
                Enter your wallet allocation
              </Typography>
            </label>
          </Flex>
          <Flex className={"flex-1 w-[100%] gap-[1.25rem]"}>
            <MicroBox className={"flex-1 gap-[1rem] w-[100%] "}>
              <SolanaGrey className={"mt-[0.25em]"} />
              <SolanaWalletInput
                ref={ref}
                maxLength={45}
                value={value ?? ""}
                onChange={handleChange}
                placeholder={"Enter your SOL wallet here"}
                color={ADDITIONAL_MICROBOX}
              />
            </MicroBox>
            <button onClick={handleSearchClick}>
              <SearchIcon />
            </button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

const SolanaWalletInput = styled(Input)`
  color: white;
  font-size: 1rem;
  font-weight: 400;
  flex: 1;
`;
