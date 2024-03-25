import { Flex } from "@shared/components";

import { HeaderWithWallet } from "./header-with-wallet.tsx";
import { HomeEffects } from "@shared/assets";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IntroWithEconomics } from "./intro-with-economics.tsx";

export const Home = () => {
  return (
    <EffectsWrapper className={"flex-col"} url={HomeEffects}>
      <HeaderWithWallet />
      <IntroWithEconomics />
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
  `,
);
