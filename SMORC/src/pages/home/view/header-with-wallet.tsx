import {
  ADDITIONAL_MICROBOX,
  Box,
  Flex,
  Header,
  MicroBox,
  Typography,
} from "@shared/components";
import { useRef, useState } from "react";
import { copyToClipboard } from "@shared/lib";
import { CopyIcon, OrcWifFamily, SmokingOrc, SolanaGrey } from "@shared/assets";
import { Textarea } from "@shared/components/atoms/textarea";
import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const HeaderWithWallet = () => {
  return (
    <Flex className={"flex-col"}>
      <Header />
      <WalletContract />
    </Flex>
  );
};

const WalletContract = () => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    if (!textAreaRef.current) return;
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 250); // Время в ms должно совпадать с продолжительностью анимации
    copyToClipboard(textAreaRef.current.value);
  };
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Flex className="gap-[10rem] px-[12.5%]">
      <Flex className="z-10 w-[30rem] pt-[10rem] flex-col gap-[1rem] text-6xl font-extrabold ">
        <Typography>$SMORC</Typography>
        <Typography>The strongest</Typography>
        <Flex className="gap-[1rem]">
          <Solana>Solana</Solana>
          <Typography>Orc</Typography>
        </Flex>
      </Flex>
      <Flex className="flex-col pt-[3rem]">
        <img src={SmokingOrc} alt="Smoking Orc" />
        <Box className="w-[35rem] flex-col gap-[1rem] pb-[1.5rem]" p={1}>
          <Flex className={"justify-between"}>
            <Typography
              special
              className={"text-[20px] font-[600] items-center"}
            >
              Presale wallet contract
            </Typography>
            <Flex className={"pt-[0.5rem]"}>
              <SolanaGrey />
            </Flex>
          </Flex>
          <AnimatedMicroBox
            clicked={isClicked}
            p={0}
            onClick={handleClick}
            className={
              "items-center max-h-[3rem] justify-between flex-1 px-[1.5rem] cursor-pointer"
            }
          >
            <Textarea
              disabled
              ref={textAreaRef}
              readOnly
              value={"123"}
              className={`text-[18px] font-[600] pt-[0.7rem] max-h-[3rem]  cursor-pointer`}
              color={ADDITIONAL_MICROBOX}
            />
            <CopyIcon className={"opacity-100 hover:opacity-70"} />
          </AnimatedMicroBox>
        </Box>
      </Flex>
    </Flex>
  );
};

export const WhoIsSmorc = () => {
  return (
    <Flex className={" pt-[8rem] gap-[10rem] px-[12.5%]"}>
      <img src={OrcWifFamily} alt="Orc Wif Family" />
      <Flex className={"flex-col items-center pt-[7.5rem]"}>
        <Typography className={"text-[56px] pl-[3rem] font-[700]"}>
          Who is
        </Typography>
        <Typography className={"text-[56px] font-[700]"}>SMORC?</Typography>
      </Flex>
    </Flex>
  );
};

const AnimatedMicroBox = styled(MicroBox)<{ clicked: boolean }>(
  ({ clicked }) => css`
    opacity: ${clicked ? 0.5 : 1};
  `,
);

export const Solana = styled.p`
  background-image: linear-gradient(
    to right,
    rgba(153, 69, 255, 0.8),
    rgba(135, 82, 243, 0.8),
    rgba(84, 151, 213, 0.8),
    rgba(67, 180, 202, 0.8),
    rgba(40, 224, 185, 0.8),
    rgba(25, 251, 155, 0.8)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
