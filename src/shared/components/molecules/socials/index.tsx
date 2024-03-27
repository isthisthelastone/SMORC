import { Flex } from "@shared/components";
import {
  Discord,
  HugeWhiteDiscrod,
  HugeWhiteTelegram,
  HugeWhiteTwitter,
  SmallGreyDiscord,
  SmallGreyTelegram,
  SmallGreyTwitter,
  Telegram,
  Twitter,
} from "@shared/assets";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

export const DISCORD_LINK = "https://discord.gg/smorc";
export const TELEGRAM_LINK = "https://t.me/smorcsol";
export const TWITTER_LINK = "https://twitter.com/SmorcSol";

interface LinkProps {
  children: ReactNode;
}
export const DiscordLink = ({ children }: LinkProps) => (
  <Link to={DISCORD_LINK}>{children}</Link>
);

export const TelegramLink = ({ children }: LinkProps) => (
  <Link to={TELEGRAM_LINK}>{children}</Link>
);

export const TwitterLink = ({ children }: LinkProps) => (
  <Link to={TWITTER_LINK}>{children}</Link>
);

export const WhiteSmallSocials = () => (
  <Flex className={"gap-5"}>
    <TwitterLink>
      <Twitter />
    </TwitterLink>
    <DiscordLink>
      <Discord />
    </DiscordLink>
    <TelegramLink>
      <Telegram />
    </TelegramLink>
  </Flex>
);

type HugeWhiteProps = {
  className?: string;
};

export const HugeWhiteSocials = ({ className }: HugeWhiteProps) => (
  <Flex className={`gap-[5rem] ${className ?? ""}`}>
    <TwitterLink>
      <HugeWhiteTwitter />
    </TwitterLink>
    <DiscordLink>
      <HugeWhiteDiscrod />
    </DiscordLink>
    <TelegramLink>
      <HugeWhiteTelegram />
    </TelegramLink>
  </Flex>
);

interface GreyTransparentSocials {
  className?: string;
}

export const GreyTransparentSocials = ({
  className,
}: GreyTransparentSocials) => (
  <Flex className={`gap-5 ${className}`}>
    <TwitterLink>
      <SmallGreyTwitter />
    </TwitterLink>
    <DiscordLink>
      <SmallGreyDiscord />
    </DiscordLink>
    <TelegramLink>
      <SmallGreyTelegram />
    </TelegramLink>
  </Flex>
);
