import { Flex } from "@shared/components";

import { HeaderWithWallet } from "./header-with-wallet.tsx";
import { HomeEffects } from "@shared/assets";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IntroWithEconomics } from "./intro-with-economics.tsx";
import { StatsWithFooter } from "./stats-with-footer.tsx";
import { useEffect, useState } from "react";
import { HomeMobile } from "@pages/home/view/mobile.tsx";

export const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // 768px is a common breakpoint for mobile

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return (
    <EffectsWrapper className={"flex-col px-[12.5%]"} url={HomeEffects}>
      {isMobile ? (
        <HomeMobile />
      ) : (
        <>
          <HeaderWithWallet />
          <IntroWithEconomics />
          <StatsWithFooter />
        </>
      )}
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
    min-width: 100vw;
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
