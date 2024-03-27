import { Logo } from "@shared/assets";
import { Flex, Typography } from "@shared/components";
import { WhiteSmallSocials } from "../../molecules";
import { scrollToElement } from "@shared/lib";
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  children?: ReactNode;
}
export const Header = ({ children }: HeaderProps) => {
  const handleAboutClick = () => scrollToElement("About");
  const handleSmorcemomicsClick = () => scrollToElement("Smorcenomics");
  const handlePresaleClick = () => scrollToElement("Pre-sale");
  return (
    <Flex className={"justify-between pt-8 flex-1 h-10 max-h-20 px-[12.5%]"}>
      <Flex>
        <Logo />
      </Flex>
      {children ?? (
        <Flex className={"gap-5"}>
          <NavText onClick={handleAboutClick}>About us</NavText>
          <NavText onClick={handleAboutClick}>Who is SMORC?</NavText>
          <NavText onClick={handleSmorcemomicsClick}>SMORCenomics</NavText>
          <NavText onClick={handlePresaleClick}>Pre-Sale Stats</NavText>
          <Link to="/airdrop">
            <NavText>Airdrop Checker</NavText>
          </Link>
        </Flex>
      )}
      <WhiteSmallSocials />
    </Flex>
  );
};

interface NavTextProps {
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export const NavText = ({ children, onClick }: NavTextProps) => (
  <Typography onClick={onClick} className="text-sm font-normal cursor-pointer">
    {children}
  </Typography>
);
