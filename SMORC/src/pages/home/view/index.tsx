import { Flex } from "@shared/components";

import { HeaderWithWallet } from "./header-with-wallet.tsx";
import { HomeEffects } from "@shared/assets";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IntroWithEconomics } from "./intro-with-economics.tsx";
import { StatsWithFooter } from "./stats-with-footer.tsx";

export const Home = () => {
  return (
    <EffectsWrapper className={"flex-col px-[12.5%]"} url={HomeEffects}>
      <HeaderWithWallet />
      <IntroWithEconomics />
      <StatsWithFooter />
    </EffectsWrapper>
  );
};

interface EffectsWrapperProps {
  url: string;
}
export const EffectsWrapper = styled(Flex)<EffectsWrapperProps>(
  ({ url }) => css`
    background-image: url("${url}");
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    min-height: 100vh;
    position: relative;
    ::-webkit-scrollbar-track {
      background: #333; /* цвет дорожки скроллбара */
    }
    ::-webkit-scrollbar-thumb {
      background-color: #000; /* цвет самого скроллбара */
      border-radius: 6px; /* скругление углов */
      border: 3px solid #333; /* граница вокруг скроллбара */
    }
    scrollbar-width: thin; /* "auto" или "thin" */
    scrollbar-color: #000 #333; /* цвет скроллбара и дорожки */
    -ms-overflow-style: none; /* Скрытие стандартного скроллбара в IE/Edge */
    ::-webkit-scrollbar {
      display: none !important ;
    }
  `,
);
