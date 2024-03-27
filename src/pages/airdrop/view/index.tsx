import { Header, NavText } from "@shared/components";
import { EffectsWrapper } from "@pages/home";
import { AirdropBackground } from "@shared/assets";
import { Link } from "react-router-dom";

export const Airdrop = () => {
  const handleAirdropClick = () => window.location.reload();
  return (
    <EffectsWrapper className={"flex-col px-[12.5%]"} url={AirdropBackground}>
      <Header>
        <NavText onClick={handleAirdropClick}>Airdrop Checker</NavText>
        <Link to="/">
          <NavText>Home Page</NavText>
        </Link>
      </Header>
    </EffectsWrapper>
  );
};
